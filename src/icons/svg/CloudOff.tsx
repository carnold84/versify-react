import * as React from "react";

function SvgCloudOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cloud_off_svg__clip0)">
        <path
          d="M18.97 21.971L17 20H6a6 6 0 01-.974-11.921l.019-.034L2 5l1.415-1.414 16.97 16.97-1.414 1.414-.001.001zM6.813 9.814l-1.465.239A4 4 0 006 18h9L6.813 9.814zm14.987 9.33l-1.46-1.458a3 3 0 00-.88-5.649l-1.316-.2-.322-1.291A6 6 0 009.3 6.642L7.829 5.173a8 8 0 0111.933 4.885 5 5 0 012.038 9.085v.001z"
          fill="inherit"
        />
      </g>
      <defs>
        <clipPath id="cloud_off_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloudOff;