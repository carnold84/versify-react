import * as React from "react";

function SvgBarChartHorizontal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 22H2V2h2v20zm11-1H5v-3h10v3zm3-5H5v-3h13v3zm3-5H5V8h16v3zm-8-5H5V3h8v3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarChartHorizontal;