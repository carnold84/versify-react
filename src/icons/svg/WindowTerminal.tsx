import * as React from "react";

function SvgWindowTerminal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2zM4 7v12h16V7H4zm14 10h-6v-2h6v2zM7.414 17L6 15.586l2.293-2.292L6 11l1.414-1.414 3.706 3.707L7.415 17h-.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgWindowTerminal;
