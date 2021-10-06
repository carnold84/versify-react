import * as React from "react";

function SvgHtml5(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.983 20.988l-6.414-1.826-1.433-16.15h15.729l-1.429 16.15-6.453 1.826zm-4.292-7.691l.245 3.123 4.063 1.085 4.028-1.08.559-6.113H9.402l-.173-2.033h7.533l.174-1.961h-9.87l.522 6h6.836l-.243 2.566-2.179.6-2.216-.607-.141-1.58H7.691z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHtml5;
