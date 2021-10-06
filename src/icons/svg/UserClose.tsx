import * as React from "react";

function SvgUserClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 19H2a6 6 0 0112 0h-2a4 4 0 00-8 0zm16.294-3.294L18 13.413l-2.293 2.293-1.414-1.414L16.585 12l-2.292-2.293 1.414-1.414L18 10.586l2.293-2.293 1.414 1.414L19.414 12l2.293 2.293-1.413 1.413zM8 12a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 102 2.09v.4V8a2 2 0 00-2-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserClose;
