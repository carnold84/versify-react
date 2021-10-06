import * as React from "react";

function SvgCalendarCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a2 2 0 01-2-2V6a2 2 0 012-2h2V2h2v2h6V2h2v2h2a2 2 0 012 2v14a2 2 0 01-2 2zM5 10v10h14V10H5zm0-4v2h14V6H5zm6 12.414l-3.707-3.707 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414L11 18.413v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCalendarCheck;