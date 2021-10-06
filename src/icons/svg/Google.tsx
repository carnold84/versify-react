import * as React from "react";

function SvgGoogle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.956 10.356v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.28 5.28 0 010-10.559 5.166 5.166 0 013.29 1.178l2.6-2.6a8.93 8.93 0 10-5.89 15.635c4.467 0 8.529-3.249 8.529-8.934a7.468 7.468 0 00-.2-1.625l-8.329.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgGoogle;
