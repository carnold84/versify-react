import * as React from "react";

function SvgCommand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22a4.01 4.01 0 01-4-3.961V16h-4v2.02A4 4 0 116 14h2v-4H6a4 4 0 114-4.02V8h4V6a4 4 0 114 4h-2v4h2a4 4 0 010 8zm-2-6v2a2 2 0 102-2h-2zM6 16a2 2 0 100 4 1.979 1.979 0 002-2v-2H6zm4-6v4h4v-4h-4zm8-6a1.979 1.979 0 00-2 2v2h2a1.979 1.979 0 002-2 1.98 1.98 0 00-2-2zM6 4a1.979 1.979 0 00-2 2 1.979 1.979 0 002 2h2V6a1.979 1.979 0 00-2-2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCommand;
