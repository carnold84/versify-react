import * as React from "react";

function SvgCloudCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cloud_check_svg__clip0)">
        <path
          d="M19 20H6a6 6 0 01-.974-11.921A8.018 8.018 0 0112 3.999a7.916 7.916 0 014.962 1.725 8.041 8.041 0 012.8 4.334A5 5 0 0119 20zM12 6a6.014 6.014 0 00-5.232 3.061L6.3 9.9l-.95.155A4 4 0 006 18h13a3 3 0 00.46-5.965l-1.316-.2-.322-1.292A5.988 5.988 0 0012 6zm-1.472 10.71l-3.5-3.5 1.41-1.41 2.09 2.09 4.6-4.6 1.41 1.41-6.01 6.009v.001z"
          fill="inherit"
        />
      </g>
      <defs>
        <clipPath id="cloud_check_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloudCheck;
