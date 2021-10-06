import * as React from "react";

function SvgMessageCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H9c-.433 0-.854.14-1.2.4L3 21zM5 5v12l2.134-1.6c.346-.26.767-.401 1.2-.4H19V5H5zm6 8.561L7.293 9.853 8.707 8.44 11 10.733l4.293-4.293 1.414 1.414L11 13.56v.001z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMessageCheck;
