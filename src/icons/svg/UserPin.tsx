import * as React from "react";

function SvgUserPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22l-3-3H5a2 2 0 01-2-2V4a2 2 0 012-2h14a2 2 0 012 2v13a2 2 0 01-2 2h-4l-3 3zM5 4v13h5l2 2 2-2h5V4H5zm11 10.986H8V14.6a3.82 3.82 0 014-3.6 3.82 3.82 0 014 3.6v.386zM12 10a1.934 1.934 0 01-2-2 1.935 1.935 0 012-2 1.935 1.935 0 012 2 1.934 1.934 0 01-2 2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserPin;
