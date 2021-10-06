import * as React from "react";

function SvgLinkpath(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.396 22a1.84 1.84 0 01-.918-.246l-4.52-2.61a1.84 1.84 0 01-.917-1.588v-5.22a1.84 1.84 0 01.917-1.589l1.373-.793v1.71c.002.983.526 1.89 1.376 2.383l4.521 2.61a2.75 2.75 0 002.752 0l1.772-1.022v1.921a1.84 1.84 0 01-.917 1.589l-4.521 2.61a1.84 1.84 0 01-.918.245zm3.207-5.891c-.322 0-.638-.085-.917-.246l-4.521-2.61a1.84 1.84 0 01-.918-1.589v-5.22c.001-.655.35-1.26.918-1.59l4.521-2.608a1.834 1.834 0 011.834 0l4.521 2.61c.567.328.916.934.917 1.589v5.22c0 .655-.35 1.26-.917 1.589l-4.521 2.61c-.279.16-.595.245-.917.245z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgLinkpath;
