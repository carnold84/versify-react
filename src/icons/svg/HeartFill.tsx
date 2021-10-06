import * as React from "react";

function SvgHeartFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 8.4A5.4 5.4 0 017.5 3 5.991 5.991 0 0112 5a5.991 5.991 0 014.5-2A5.4 5.4 0 0122 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHeartFill;
