import * as React from "react";

function SvgNotificationDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2 2 0 01-2-2h4a2 2 0 01-2 2zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 01.924-4.06A4.654 4.654 0 0110 4.18V2h3.646a4.5 4.5 0 004.3 7.4c.035.357.052.727.052 1.1V16l2 1v2H20zM17 8a3 3 0 11.01-6A3 3 0 0117 8z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationDot;