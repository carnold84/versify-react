import * as React from "react";

function SvgPlusSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM5 5v14h14V5H5zm8 12h-2v-4H7v-2h4V7h2v4h4v2h-4v4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPlusSquare;