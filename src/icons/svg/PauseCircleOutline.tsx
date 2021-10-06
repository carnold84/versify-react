import * as React from "react";

function SvgPauseCircleOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22zm-.016-2H12a8 8 0 10-.016 0zM15 16h-2V8h2v8zm-4 0H9V8h2v8z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgPauseCircleOutline;