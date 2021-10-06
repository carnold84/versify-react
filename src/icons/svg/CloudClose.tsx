import * as React from "react";

function SvgCloudClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cloud_close_svg__clip0)">
        <path
          d="M19 20H6a6 6 0 01-.974-11.921A8.018 8.018 0 0112 3.999a7.916 7.916 0 014.96 1.725 8.041 8.041 0 012.8 4.333A5 5 0 0119 20zM12 6a6.014 6.014 0 00-5.232 3.061L6.3 9.9l-.95.155A4 4 0 006 18h13a3 3 0 00.46-5.965l-1.316-.2-.322-1.292A5.988 5.988 0 0012 6zM9.413 16.414L8 15l2.293-2.293L8 10.414 9.414 9l2.293 2.292L14 9l1.414 1.414-2.293 2.293L15.414 15 14 16.413l-2.294-2.292-2.292 2.293h-.001z"
          fill="inherit"
        />
      </g>
      <defs>
        <clipPath id="cloud_close_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloudClose;