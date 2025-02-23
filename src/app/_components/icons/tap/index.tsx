import type { IconProps } from "@/app/_components/icons/types";

const TapIcon = ({ size, ...restProps }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.218 8.90556C11.2688 9.27117 11.3316 9.66456 11.4025 10.0088L11.1235 10.0085V9.51321C11.1235 9.44264 11.0656 9.38549 10.994 9.38549H9.675C9.66917 9.38549 9.66334 9.38613 9.65752 9.38676V9.38102L9.65137 8.87746C9.66885 8.71238 9.62287 8.59775 9.53936 8.51217C9.48498 8.45629 9.41765 8.41766 9.34385 8.38732C9.34871 8.26439 9.33253 8.11399 9.13573 8.01565L9.47334 1.52279C9.48014 1.45893 9.48369 1.39634 9.48433 1.3344C9.48789 0.891195 9.32443 0.575716 9.0794 0.361779C8.83857 0.151672 8.52105 0.0437455 8.20901 0.0108565C8.14362 0.00415103 8.07726 0.000638621 8.01025 0H8.00832C7.94132 0.00031931 7.87464 0.00383172 7.80958 0.0108565C7.49754 0.0437455 7.18 0.151353 6.93918 0.361779C6.69414 0.575716 6.53068 0.890876 6.53424 1.3344C6.53489 1.39634 6.53845 1.45893 6.54525 1.52279L6.88286 8.01565C6.68638 8.11367 6.66987 8.26439 6.67472 8.38732C6.60092 8.41766 6.5336 8.45629 6.47922 8.51217C6.39603 8.59775 6.34974 8.71238 6.36722 8.87746L6.36107 9.38102C6.36107 9.39315 6.36269 9.40465 6.3656 9.41582C6.3669 9.47873 6.41351 9.53365 6.49734 9.57963V11.1586C6.49734 11.1647 6.49767 11.1708 6.49864 11.1768C6.47727 11.2011 6.45688 11.2257 6.43778 11.2509C6.28662 11.4492 6.2002 11.6785 6.2002 11.9234C6.2002 12.1772 6.29277 12.4141 6.45429 12.6169C6.60125 12.8018 6.80614 12.9576 7.05053 13.0716L7.05473 13.244L7.11656 15.7509C7.11397 15.8071 7.15022 15.8601 7.20719 15.8777C7.33375 15.917 7.46096 15.9467 7.58947 15.9671C7.71603 15.9872 7.84357 15.9981 7.97272 16H7.97563C8.11546 15.9981 8.25238 15.9872 8.38704 15.9674C8.52072 15.9476 8.65635 15.9183 8.79456 15.8787C8.84862 15.8646 8.88876 15.8167 8.89005 15.7589L8.96159 13.0738C9.20662 12.9602 9.41249 12.8037 9.56074 12.6182C9.7229 12.4151 9.81579 12.1779 9.81579 11.9234C9.81579 11.8918 9.81451 11.8601 9.81159 11.8292H10.994C11.0656 11.8292 11.1235 11.772 11.1235 11.7014V11.409H12.5707C12.6423 11.409 12.7002 11.3518 12.7002 11.2812V10.1365C12.7002 10.0659 12.6423 10.0088 12.5707 10.0088H12.3655C12.417 9.68213 12.46 9.31141 12.494 8.96144C12.5581 8.30334 12.5908 7.7222 12.5908 7.64716C12.5908 7.50794 12.4911 7.35595 12.3315 7.24898C12.2007 7.16085 12.0266 7.09923 11.8363 7.09923C11.6608 7.09923 11.5032 7.16181 11.3789 7.24515C11.2057 7.3617 11.0928 7.53125 11.0827 7.63503C11.0772 7.69282 11.1284 8.2596 11.218 8.90556ZM12.2376 8.93749C12.2027 9.29544 12.1583 9.6767 12.1046 10.0088L11.667 10.0085C11.5922 9.65594 11.5268 9.24818 11.4744 8.8714C11.387 8.24236 11.3355 7.70687 11.3401 7.65898C11.3443 7.61619 11.4145 7.53029 11.5252 7.4559C11.611 7.3981 11.7188 7.35499 11.8369 7.35499C11.9722 7.35499 12.0949 7.3981 12.1865 7.45973C12.2762 7.52008 12.3325 7.5916 12.3325 7.64716C12.3325 7.72156 12.3004 8.29345 12.2376 8.93749ZM11.1242 10.2642H12.4419V11.1535H11.1242V10.2642ZM6.6226 9.38565C6.62131 9.38573 6.62001 9.38581 6.61873 9.38581L6.61808 9.38453L6.62455 8.8797C6.6252 8.87172 6.6252 8.86373 6.62423 8.85575V8.85447C6.70903 8.88609 6.8152 8.91163 6.93918 8.93079C7.21431 8.97326 7.59109 8.99944 8.00347 8.99944C8.41585 8.99944 8.7923 8.97326 9.06776 8.93079C9.19723 8.91067 9.3076 8.88353 9.39435 8.85L9.39404 8.85575C9.39371 8.86086 9.39338 8.86597 9.39338 8.87108L9.39986 9.38421C9.39986 9.39411 9.40116 9.40369 9.40342 9.41295H9.38562C9.38562 9.4173 9.36257 9.4187 9.32024 9.42127C9.26324 9.42472 9.17127 9.4303 9.0535 9.44807C8.78646 9.48862 8.41552 9.51353 8.00476 9.51353C7.594 9.51353 7.22305 9.48831 6.95601 9.44807C6.85631 9.43275 6.77507 9.42668 6.71777 9.42285C6.69447 9.39986 6.6621 9.38549 6.62649 9.38549C6.62519 9.38549 6.62389 9.38557 6.6226 9.38565ZM6.75597 10.9463V9.66999C6.80614 9.68149 6.86052 9.69171 6.91814 9.70033C7.19748 9.74248 7.58202 9.76866 8.00541 9.76866C8.42879 9.76866 8.81334 9.74248 9.09268 9.70033C9.30049 9.66903 9.46039 9.61954 9.55329 9.55504C9.57077 9.60517 9.619 9.64125 9.67564 9.64125H10.8652V10.1365V11.2812V11.5737H9.7556C9.71513 11.4597 9.65525 11.3515 9.57886 11.2512C9.44129 11.0711 9.24935 10.9172 9.01953 10.8013C9.00011 10.399 8.76058 10.133 8.45145 10.0043C8.44789 10.0024 8.444 10.0008 8.44011 9.9992C8.30481 9.94492 8.15624 9.91746 8.00702 9.91714C7.85812 9.91714 7.70956 9.94396 7.57426 9.99824C7.26092 10.1237 7.01719 10.391 6.99744 10.801C6.91134 10.8441 6.83042 10.893 6.75597 10.9463ZM8.38768 15.2745C8.47313 15.2618 8.55956 15.2452 8.64664 15.2244L8.63562 15.6583C8.54078 15.6823 8.44563 15.7011 8.34949 15.7155C8.22293 15.734 8.09863 15.7442 7.97498 15.7458C7.85975 15.7442 7.74516 15.7343 7.63025 15.7158C7.54512 15.7021 7.45935 15.6836 7.3726 15.6599L7.36192 15.2279C7.43733 15.2464 7.5134 15.2621 7.58979 15.2742C7.71635 15.2943 7.84356 15.3052 7.97272 15.3071H7.97628C8.11611 15.3052 8.25302 15.2943 8.38768 15.2745ZM7.62993 15.0226C7.5393 15.0079 7.44769 14.9878 7.35512 14.9619L7.31239 13.238L7.25445 10.8802V10.8767C7.24701 10.5446 7.43086 10.3313 7.67136 10.2345C7.77656 10.1924 7.89178 10.1713 8.00702 10.1716C8.12193 10.1719 8.23749 10.1933 8.34302 10.2358C8.34593 10.2371 8.34917 10.238 8.35208 10.239C8.54241 10.3185 8.69616 10.4711 8.74569 10.6959L8.69228 13.5158L8.65376 14.9603C8.55309 14.9865 8.45177 15.0069 8.34916 15.0223C8.22259 15.0408 8.09831 15.051 7.97466 15.0526C7.85943 15.051 7.74484 15.0411 7.62993 15.0226ZM7.00165 11.0903L7.04341 12.7807C6.88772 12.6923 6.75597 12.5831 6.65724 12.4588C6.53101 12.3005 6.45882 12.1172 6.45882 11.923C6.45882 11.7356 6.52615 11.5587 6.64397 11.4045C6.73558 11.2847 6.85728 11.1781 7.00165 11.0903ZM8.96418 12.7852L8.99654 11.0794C9.149 11.1695 9.27685 11.2796 9.37234 11.4045C9.49016 11.559 9.55717 11.7356 9.55717 11.923C9.55717 12.1178 9.48467 12.3014 9.35778 12.4601C9.25744 12.5859 9.12343 12.6961 8.96418 12.7852ZM7.35026 6.30702V8.11974C7.30203 8.11495 7.25769 8.1092 7.21723 8.10282C7.19068 8.09867 7.16673 8.09771 7.14569 8.09835C7.14569 8.09723 7.14561 8.09603 7.14553 8.09484C7.14545 8.09364 7.14537 8.09244 7.14537 8.09132L6.80323 1.5081C6.80323 1.50459 6.8029 1.50108 6.80258 1.49757C6.79643 1.43817 6.79287 1.38293 6.79255 1.33152C6.78963 0.971661 6.91781 0.719406 7.11041 0.551449C7.30721 0.379979 7.57296 0.291211 7.83741 0.263431C7.89665 0.257364 7.95426 0.254171 8.00961 0.253532C8.06496 0.253852 8.12258 0.257045 8.18182 0.263431C8.44627 0.291211 8.71234 0.379979 8.90882 0.551449C9.10141 0.719406 9.2296 0.971661 9.22669 1.33152C9.22636 1.38325 9.22313 1.43849 9.21665 1.49757C9.21633 1.4998 9.21601 1.50235 9.21601 1.50459L8.87387 8.09132C8.87354 8.09388 8.87354 8.09611 8.87354 8.09835C8.85639 8.09867 8.83729 8.09994 8.81657 8.10314C8.7732 8.10984 8.72528 8.11559 8.67317 8.1207V6.30702C8.67317 6.23645 8.61524 6.17929 8.5437 6.17929H7.47974C7.4082 6.17929 7.35026 6.23645 7.35026 6.30702ZM8.85639 8.35443C8.93893 8.34166 9.01046 8.3241 9.06905 8.30111C9.08911 8.34198 9.08652 8.38732 9.08393 8.42372C9.08375 8.42719 9.08354 8.43059 9.08332 8.43404C9.08278 8.44264 9.08222 8.4516 9.082 8.463C9.07682 8.5208 9.11242 8.57636 9.17068 8.59519C9.2202 8.61116 9.26618 8.6284 9.3034 8.65012C9.29742 8.65055 9.29093 8.65099 9.28394 8.65146C9.22812 8.65526 9.14057 8.66123 9.02923 8.67853C8.76995 8.71845 8.40775 8.74335 8.00444 8.74335C7.60112 8.74335 7.23891 8.71845 6.97964 8.67853C6.86182 8.66033 6.77054 8.65427 6.71551 8.65075C6.75306 8.62904 6.79967 8.61085 6.84952 8.59488C6.90163 8.57795 6.93918 8.52942 6.93853 8.47226C6.93822 8.45246 6.93735 8.4397 6.93643 8.42631L6.93626 8.42372C6.93367 8.38605 6.93044 8.33815 6.95342 8.296C7.01427 8.32155 7.09002 8.3407 7.17838 8.35443C7.38878 8.387 7.68787 8.40042 8.01739 8.40042C8.3469 8.40042 8.64567 8.387 8.85639 8.35443ZM7.60857 8.13762V6.43506H8.41358V8.13794L7.60857 8.13762Z"
      />
    </svg>
  );
};

export default TapIcon;
