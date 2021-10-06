import * as React from "react";

function SvgTrendingDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.707 10.293a1 1 0 00-.707.293l-3 3-6.293-6.293-1.414 1.414L9 15.414a1 1 0 00.707.293h.586a1 1 0 00.707-.293l3-3 4.293 4.293L16 19h6v-6l-2.293 2.293L15 10.586a1 1 0 00-.707-.293h-.586z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTrendingDown;
