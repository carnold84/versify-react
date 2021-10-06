import * as React from "react";

function SvgBarLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM10 5v14h9V5h-9zM5 5v14h3V5H5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBarLeft;