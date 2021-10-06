import * as React from "react";

function SvgLocationOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21a29.776 29.776 0 01-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0111.952-4.951A6.955 6.955 0 0119 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0112 21zm0-16a5.006 5.006 0 00-5 5c0 1.166.527 3.185 3.035 6.186A27.93 27.93 0 0012 18.3a28.121 28.121 0 001.966-2.111C16.473 13.184 17 11.165 17 10a5.006 5.006 0 00-5-5zm0 8a3 3 0 110-6 3 3 0 010 6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLocationOutline;
