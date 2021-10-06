import * as React from "react";

function SvgMenuAlt01(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 18h-9v-2h9v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z" fill="inherit" />
    </svg>
  );
}

export default SvgMenuAlt01;
