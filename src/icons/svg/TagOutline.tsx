import * as React from "react";

function SvgTagOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.897 21.968a1.987 1.987 0 01-1.415-.586l-7.834-7.835a1.994 1.994 0 01-.58-1.567l.5-6.566a1.989 1.989 0 011.846-1.841l6.566-.5c.051-.011.103-.011.154-.011a2.01 2.01 0 011.413.586l7.835 7.834a2 2 0 010 2.829l-7.07 7.071a1.987 1.987 0 01-1.415.586zm-.764-16.906l-6.57.5-.5 6.571 7.834 7.835 7.07-7.07-7.834-7.836zm-3.479 5.592a2 2 0 110-4 2 2 0 010 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTagOutline;