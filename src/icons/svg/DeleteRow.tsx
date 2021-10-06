import * as React from "react";

function SvgDeleteRow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 6H4v4h8.101a7.018 7.018 0 00-1.427 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4c0 .033 0 .066-.002.099A7.017 7.017 0 0020 8.674V6z"
        fill="inherit"
      />
      <path
        d="M20.85 11.81A4.99 4.99 0 0017 10a4.993 4.993 0 00-4 2 5 5 0 107.851-.19zM20 14v2h-6v-2h6z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDeleteRow;
