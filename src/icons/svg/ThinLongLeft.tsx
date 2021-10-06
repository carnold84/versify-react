import * as React from "react";

function SvgThinLongLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 8.5L2 12l3.5 3.5.707-.707L3.914 12.5H22v-1H3.914l2.293-2.293L5.5 8.5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgThinLongLeft;
