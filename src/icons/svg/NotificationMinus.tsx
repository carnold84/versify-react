import * as React from "react";

function SvgNotificationMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a2.02 2.02 0 01-2.01-2h4a2.02 2.02 0 01-.15.78 2.042 2.042 0 01-1.44 1.18 1.758 1.758 0 01-.4.04zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 01.924-4.06A4.654 4.654 0 0110 4.18V2h4v2.18h.011c.025 0 .049.01.073.016C16.611 4.845 18 7.082 18 10.5V16l2 1v2zM9 11v2h6v-2H9z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgNotificationMinus;