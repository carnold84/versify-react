import * as React from "react";

function SvgBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a1 1 0 01-1-1v-7.3a1 1 0 01.341-.752L5 10.5V4a1 1 0 011-1h14a1 1 0 011 1v16a1 1 0 01-1 1zM9 7.329a1 1 0 01.658.248l5 4.375A1 1 0 0115 12.7V19h4V5H7v3.75l1.341-1.174A1 1 0 019 7.329zM8 16h2v3h3v-5.843l-4-3.5-4 3.5V19h3v-3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBuilding;
