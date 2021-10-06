import * as React from "react";

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.002 12.002a10.005 10.005 0 008.437 9.879v-6.989H7.902v-2.89h2.54v-2.2a3.528 3.528 0 013.773-3.9c.75.012 1.5.079 2.24.2v2.459h-1.264a1.446 1.446 0 00-1.628 1.563v1.878h2.771l-.443 2.891h-2.328v6.988a10 10 0 10-11.561-9.879z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFacebook;
