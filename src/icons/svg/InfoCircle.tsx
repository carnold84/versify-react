import * as React from "react";

function SvgInfoCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zM9.99 10.99V13h1v4h3.02v-2H13l.01-4.009-3.02-.001zm1-3.99v2.019h2.02V7h-2.02z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgInfoCircle;