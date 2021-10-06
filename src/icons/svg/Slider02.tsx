import * as React from "react";

function SvgSlider02(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 21.5A3.521 3.521 0 014.145 19H2v-2h2.145A3.5 3.5 0 117.5 21.5zm0-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM22 19H12v-2h10v2zm-5.5-3.5a3.5 3.5 0 113.355-4.5H22v2h-2.145a3.521 3.521 0 01-3.355 2.5zm0-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 13H2v-2h10v2zM9.5 9.5A3.5 3.5 0 1112.855 5H22v2h-9.145A3.522 3.522 0 019.5 9.5zm0-5A1.5 1.5 0 1011 6.078v.29V6a1.5 1.5 0 00-1.5-1.5zM5 7H2V5h3v2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSlider02;