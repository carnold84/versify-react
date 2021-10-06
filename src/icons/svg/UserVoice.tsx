import * as React from "react";

function SvgUserVoice(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 19.001H2a6 6 0 0112 0h-2a4 4 0 10-8 0zm14.364-3.637L16.95 13.95a7 7 0 000-9.9l1.414-1.414a9 9 0 010 12.727v.001zm-2.829-2.828l-1.414-1.416a3 3 0 000-4.24l1.414-1.417a5 5 0 010 7.071v.002zM8 12a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 102 2.09v.4V8a2 2 0 00-2-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserVoice;
