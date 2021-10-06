import * as React from "react";

function SvgTennisMatch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.85 6.594c.107-.226.224-.45.353-.672l.027-.046.015-.026c.227-.384.478-.742.748-1.075 1.05-1.29 2.395-2.18 3.77-2.562a8.06 8.06 0 01.014-.005c1.304-.36 2.634-.265 3.77.371l.03.018c2.646 1.51 3.212 5.417 1.265 8.733-1.721 2.93-4.83 4.419-7.361 3.694L17 21.01 15.256 22 12 16.462 8.748 22 7 21.008l4.326-7.364c-.894-1.04-1.324-2.486-1.246-4.04a8.05 8.05 0 01.77-3.01zm6.938-2.545v7.916c.475-.421.923-.957 1.314-1.622 1.623-2.763.79-5.268-.548-6.027a2.388 2.388 0 00-.766-.267zm-1.009 8.625V4.036c-.647.087-1.347.35-2.018.825v8.34c.623.01 1.324-.153 2.018-.527zm-4.018-.477c.15.205.318.38.5.52a2.135 2.135 0 00.479.282l.012.005v-7.23a7.03 7.03 0 00-.783 1.089l-.015.026-.023.039c-.06.104-.117.209-.17.313-1.044 2.038-.775 3.895 0 4.956z"
        fill="inherit"
      />
      <path
        d="M9.422 5.006c-.728-.567-1.502-.876-2.211-.97v8.607c.5.269 1.003.429 1.477.493a7.1 7.1 0 00.277.579l-.799 1.36c-1.9-.362-3.799-1.709-5.01-3.769C1.21 7.995 1.78 4.092 4.428 2.59c1.842-1.045 4.205-.654 6.128.795a10.51 10.51 0 00-1.134 1.62zM4.896 10.32a6.636 6.636 0 001.308 1.614V4.048c-.283.05-.54.14-.762.266-1.334.756-2.165 3.251-.546 6.006z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTennisMatch;
