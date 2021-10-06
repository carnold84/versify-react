import * as React from "react";

function SvgMenuDuo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 16H3v-2h18v2zm0-6H3V8h18v2z" fill="inherit" />
    </svg>
  );
}

export default SvgMenuDuo;
