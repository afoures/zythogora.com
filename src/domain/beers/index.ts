"server only";

import {
  Acidity,
  AromasIntensity,
  Bitterness,
  BodyStrength,
  CarbonationIntensity,
  Duration,
  FlavorsIntensity,
  Haziness,
  HeadRetention,
  LabelDesign,
  ServingFrom,
} from "@prisma/client";
import { nanoid } from "nanoid";
import { cache } from "react";

import {
  InvalidBreweryError,
  InvalidBeerSlugError,
  UnknownBeerError,
  UnauthorizedBeerReviewError,
  UnauthorizedBeerCreationError,
} from "@/domain/beers/errors";
import {
  transformRawBeerReviewToBeerReview,
  transformRawBeerToBeer,
  transformRawColorToColor,
  transformRawStyleCategoryToStyleCategory,
} from "@/domain/beers/transforms";
import { getCurrentUser } from "@/lib/auth";
import { getPaginatedResults } from "@/lib/pagination";
import prisma, { slugify } from "@/lib/prisma";

import type { CreateReviewData } from "@/app/[locale]/(business)/(without-header)/breweries/[brewerySlug]/beers/[beerSlug]/review/schemas";
import type { CreateBeerData } from "@/app/[locale]/(business)/(without-header)/create/beer/schemas";
import type {
  Beer,
  BeerReview,
  Color,
  LegacyStyle,
  StyleCategory,
} from "@/domain/beers/types";
import type {
  PaginatedResults,
  PaginationParams,
} from "@/lib/pagination/types";

export const getBeerBySlug = cache(
  async (beerSlug: string, brewerySlug: string): Promise<Beer> => {
    if (brewerySlug.length < 4 || beerSlug.length < 4) {
      throw new InvalidBeerSlugError();
    }

    let beer = await prisma.beers.findUnique({
      where: { slug: beerSlug },
      include: {
        brewery: true,
        style: true,
        color: true,
      },
    });

    if (!beer) {
      beer = await prisma.beers.findFirst({
        where: {
          AND: [
            { slug: { startsWith: beerSlug.slice(0, 4) } },
            {
              OR: [
                { brewery: { slug: brewerySlug } },
                { brewery: { slug: { startsWith: brewerySlug.slice(0, 4) } } },
              ],
            },
          ],
        },
        include: {
          brewery: true,
          style: true,
          color: true,
        },
      });
    }

    if (!beer) {
      throw new UnknownBeerError();
    }

    if (!beer.brewery.slug.startsWith(brewerySlug)) {
      throw new InvalidBreweryError();
    }

    return transformRawBeerToBeer(beer);
  },
);

export const getColors = async (): Promise<Color[]> => {
  const colors = await prisma.colors.findMany();

  return colors.map(transformRawColorToColor);
};

export const getStyles = async (): Promise<StyleCategory[]> => {
  const categories = await prisma.styleCategories.findMany({
    include: { styles: { orderBy: { name: "asc" } } },
    orderBy: { name: "asc" },
  });

  return categories.map(transformRawStyleCategoryToStyleCategory);
};

export const getLegacyStyles = async (): Promise<LegacyStyle[]> => {
  const styles = await prisma.legacyStyles.findMany({
    orderBy: { name: "asc" },
  });

  return styles.map((style) => ({
    id: style.id,
    name: style.name,
  }));
};

export const getReviewsByBeer = cache(
  async ({
    beerId,
    limit = 20,
    page = 1,
  }: PaginationParams<{ beerId: string }>): Promise<
    PaginatedResults<BeerReview>
  > => {
    const [rawReviews, reviewCount] = await Promise.all([
      prisma.reviews.findMany({
        where: { beerId },
        include: {
          user: true,
        },
        take: limit,
        skip: (page - 1) * limit,
        orderBy: { createdAt: "desc" },
      }),

      prisma.reviews.count({
        where: { beerId },
      }),
    ]);

    const reviews = rawReviews.map(transformRawBeerReviewToBeerReview);

    return getPaginatedResults(reviews, reviewCount, page, limit);
  },
);

export const createBeer = async (data: CreateBeerData) => {
  const user = await getCurrentUser();
  if (!user) {
    throw new UnauthorizedBeerCreationError();
  }

  const id = nanoid();

  const beer = await prisma.beers.create({
    data: {
      id,
      slug: slugify(id, data.name),
      name: data.name,
      abv: data.abv,
      ibu: data.ibu,
      breweryId: data.breweryId,
      styleId: data.styleId,
      colorId: data.colorId,
      createdBy: user.id,
      updatedBy: user.id,
    },
    include: { brewery: true },
  });

  return beer;
};

export const reviewBeer = async (
  beerId: string,
  review: Omit<CreateReviewData, "beerId">,
) => {
  const user = await getCurrentUser();

  if (!user) {
    throw new UnauthorizedBeerReviewError();
  }

  const servingFrom = {
    draft: ServingFrom.DRAFT,
    bottle: ServingFrom.BOTTLE,
    can: ServingFrom.CAN,
    growler: ServingFrom.GROWLER,
    cask: ServingFrom.CASK,
  }[review.servingFrom];

  const labelDesign = review.labelDesign
    ? {
        hateIt: LabelDesign.HATE_IT,
        meh: LabelDesign.MEH,
        average: LabelDesign.AVERAGE,
        good: LabelDesign.GOOD,
        loveIt: LabelDesign.LOVE_IT,
      }[review.labelDesign]
    : null;

  const haziness = review.haziness
    ? {
        completelyClear: Haziness.COMPLETELY_CLEAR,
        verySlightlyCast: Haziness.VERY_SLIGHTLY_CAST,
        slightlyHazy: Haziness.SLIGHTLY_HAZY,
        hazy: Haziness.HAZY,
        veryHazy: Haziness.VERY_HAZY,
      }[review.haziness]
    : null;

  const headRetention = review.headRetention
    ? {
        poor: HeadRetention.POOR,
        shortLived: HeadRetention.SHORT_LIVED,
        moderate: HeadRetention.MODERATE,
        good: HeadRetention.GOOD,
        excellent: HeadRetention.EXCELLENT,
      }[review.headRetention]
    : null;

  const aromasIntensity = review.aromasIntensity
    ? {
        faint: AromasIntensity.FAINT,
        mild: AromasIntensity.MILD,
        moderate: AromasIntensity.MODERATE,
        pronounced: AromasIntensity.PRONOUNCED,
        intense: AromasIntensity.INTENSE,
      }[review.aromasIntensity]
    : null;

  const flavorsIntensity = review.flavorsIntensity
    ? {
        faint: FlavorsIntensity.FAINT,
        mild: FlavorsIntensity.MILD,
        moderate: FlavorsIntensity.MODERATE,
        pronounced: FlavorsIntensity.PRONOUNCED,
        intense: FlavorsIntensity.INTENSE,
      }[review.flavorsIntensity]
    : null;

  const bodyStrength = review.bodyStrength
    ? {
        thin: BodyStrength.THIN,
        light: BodyStrength.LIGHT,
        medium: BodyStrength.MEDIUM,
        full: BodyStrength.FULL,
        heavy: BodyStrength.HEAVY,
      }[review.bodyStrength]
    : null;

  const carbonationIntensity = review.carbonationIntensity
    ? {
        flat: CarbonationIntensity.FLAT,
        low: CarbonationIntensity.LOW,
        moderate: CarbonationIntensity.MODERATE,
        lively: CarbonationIntensity.LIVELY,
        highlyCarbonated: CarbonationIntensity.HIGHLY_CARBONATED,
      }[review.carbonationIntensity]
    : null;

  const bitterness = review.bitterness
    ? {
        low: Bitterness.LOW,
        moderate: Bitterness.MODERATE,
        pronounced: Bitterness.PRONOUNCED,
        aggressive: Bitterness.AGGRESSIVE,
        lingering: Bitterness.LINGERING,
      }[review.bitterness]
    : null;

  const acidity = review.acidity
    ? {
        none: Acidity.NONE,
        soft: Acidity.SOFT,
        bright: Acidity.BRIGHT,
        tart: Acidity.TART,
        puckering: Acidity.PUCKERING,
      }[review.acidity]
    : null;

  const duration = review.duration
    ? {
        short: Duration.SHORT,
        moderate: Duration.MODERATE,
        medium: Duration.MEDIUM,
        long: Duration.LONG,
        endless: Duration.ENDLESS,
      }[review.duration]
    : null;

  const createdReview = await prisma.reviews.create({
    data: {
      beerId,
      userId: user.id,

      globalScore: review.globalScore,
      servingFrom,
      comment: review.comment,

      labelDesign,
      haziness,
      headRetention,

      aromasIntensity,

      flavorsIntensity,
      bodyStrength,
      carbonationIntensity,
      bitterness,
      acidity,

      duration,
    },
    include: {
      beer: {
        include: {
          brewery: true,
        },
      },
    },
  });

  return createdReview;
};
