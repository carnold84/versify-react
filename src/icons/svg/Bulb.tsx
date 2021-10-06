import * as React from "react";

function SvgBulb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 22H9v-2h6v2zm0-3H9l-.223-2a8.461 8.461 0 00-.591-1.921c-.354-.5-.723-.927-1.08-1.344A6.666 6.666 0 015 9a7 7 0 0114 0 6.693 6.693 0 01-2.093 4.711l-.017.02a17.69 17.69 0 00-1.071 1.344A8.6 8.6 0 0015.226 17L15 19zM12 4a5.006 5.006 0 00-5 5c0 1.544.644 2.293 1.618 3.428.37.432.79.92 1.2 1.491A10.21 10.21 0 0110.825 17h2.351a10.461 10.461 0 011.006-3.075c.4-.571.819-1.062 1.188-1.494l.015-.018C16.357 11.273 17 10.52 17 9a5.006 5.006 0 00-5-5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgBulb;
