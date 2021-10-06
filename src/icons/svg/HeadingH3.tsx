import * as React from "react";

function SvgHeadingH3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2zM21.729 10l.002-2H14.5v2h4.378l-3.176 3.283 1.407 1.515c.256-.118.546-.186.854-.186 1.04 0 1.884.768 1.884 1.714 0 .947-.844 1.715-1.884 1.715-.917 0-1.681-.597-1.849-1.386L14 17.029C14.36 18.722 15.998 20 17.963 20 20.193 20 22 18.355 22 16.326c0-1.691-1.256-3.117-2.968-3.543L21.73 10z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHeadingH3;
