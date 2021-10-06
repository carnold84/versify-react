import * as React from "react";

function SvgThinBigDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 17.5L13 24l6.5-6.5-.707-.707-5.293 5.293V0h-1v22.086l-5.293-5.293-.707.707z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinBigDown;
