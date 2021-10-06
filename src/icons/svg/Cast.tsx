import * as React from "react";

function SvgCast(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21h-7v-2h7V5H3v3H1V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2zm-9 0h-2a8.94 8.94 0 00-2.639-6.361A8.939 8.939 0 001 12v-2a10.929 10.929 0 017.776 3.22A10.927 10.927 0 0112 21zm-4 0H6a4.968 4.968 0 00-1.466-3.534A4.966 4.966 0 001 16v-2a6.955 6.955 0 014.951 2.049A6.956 6.956 0 018 21zm-4 0H1v-3a3 3 0 013 3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCast;
