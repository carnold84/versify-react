import * as React from "react";

function SvgCircleRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 13l-1.41-1.41L13.17 13H7v-2h6.17l-2.58-2.59L12 7l5 5-5 5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCircleRight;
