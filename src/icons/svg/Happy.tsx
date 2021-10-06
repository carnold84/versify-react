import * as React from "react";

function SvgHappy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 14a4.837 4.837 0 01-4-2 6.3 6.3 0 01-1-2h10v.008A6.422 6.422 0 0116 16a4.838 4.838 0 01-4 2zm-3.5-6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6.993-.014a1.493 1.493 0 110-2.986 1.493 1.493 0 010 2.986z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHappy;
