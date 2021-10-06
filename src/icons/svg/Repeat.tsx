import * as React from "react";

function SvgRepeat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 22l-4-4 4-4v3h10v-4h2v5a1 1 0 01-1 1H7v3zm0-11H5V6a1 1 0 011-1h11V2l4 4-4 4V7H7v4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgRepeat;
