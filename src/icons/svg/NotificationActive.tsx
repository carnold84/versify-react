import * as React from "react";

function SvgNotificationActive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2.02 2.02 0 01-2.01-2h4a2.02 2.02 0 01-.149.78 2.043 2.043 0 01-1.44 1.18H12.355A1.944 1.944 0 0112 22zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 01.924-4.06A4.654 4.654 0 0110 4.18V2h4v2.18c2.579.614 4 2.858 4 6.32V16l2 1v2zm1.97-9h-2a8.672 8.672 0 00-3.39-6.57L18 2a9.9 9.9 0 012.825 3.486A11.52 11.52 0 0121.97 10zM4 10H2c.07-1.567.46-3.103 1.145-4.514A9.9 9.9 0 015.97 2l1.42 1.43A8.67 8.67 0 004 10z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationActive;
