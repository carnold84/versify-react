import * as React from "react";

function SvgCylinder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22c-4.561 0-8-1.935-8-4.5V6h.047a4.3 4.3 0 012.535-2.867A12.276 12.276 0 0112 2c4.561 0 8 1.935 8 4.5a2.806 2.806 0 01-.048.5H20v10.5c0 2.565-3.439 4.5-8 4.5zM5.777 9.394V17.5C5.777 18.519 8.2 20 12 20s6.222-1.481 6.222-2.5V9.394A11.3 11.3 0 0112 11a11.305 11.305 0 01-6.223-1.606zM12 4C8.2 4 5.777 5.481 5.777 6.5S8.2 9 12 9s6.222-1.481 6.222-2.5S15.8 4 12 4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCylinder;