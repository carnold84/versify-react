import * as React from "react";

function SvgUserCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 19H2a6 6 0 0112 0h-2a4 4 0 00-8 0zm11.994-3.59l-2.706-2.7 1.412-1.418 1.292 1.292 4.3-4.292 1.412 1.416-5.712 5.7.002.002zM8 12a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 102 2.09v.4V8a2 2 0 00-2-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserCheck;