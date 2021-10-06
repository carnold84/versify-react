import * as React from "react";

function SvgMobileAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.75 23h-10a2 2 0 01-2-2V3a2 2 0 012-2h10a2 2 0 012 2v18a2 2 0 01-2 2zm-10-20v18h10V3h-10zm5 17a1 1 0 110-2 1 1 0 010 2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMobileAlt;
