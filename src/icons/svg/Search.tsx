import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.677 19.607l-5.715-5.716a6 6 0 01-7.719-9.133 6 6 0 019.134 7.718l5.715 5.716-1.414 1.414-.001.001zM9.485 5a4 4 0 102.917 1.264l.605.6-.682-.68-.012-.012A3.972 3.972 0 009.485 5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSearch;
