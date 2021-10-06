import * as React from "react";

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.006 19.012h-.02c-.062 0-6.265-.012-7.83-.437a2.5 2.5 0 01-1.764-1.765A26.494 26.494 0 011.986 12a26.646 26.646 0 01.417-4.817A2.564 2.564 0 014.169 5.4c1.522-.4 7.554-.4 7.81-.4H12c.063 0 6.282.012 7.831.437.859.233 1.53.904 1.762 1.763.29 1.594.427 3.211.407 4.831a26.568 26.568 0 01-.418 4.811 2.51 2.51 0 01-1.767 1.763c-1.52.403-7.553.407-7.809.407zm-2-10.007l-.005 6 5.212-3-5.207-3z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgYoutube;
