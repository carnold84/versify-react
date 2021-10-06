import * as React from "react";

function SvgData(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22c-4.336 0-8-2.035-8-4.444V6.444C4 4.035 7.664 2 12 2s8 2.035 8 4.444v11.112C20 19.965 16.337 22 12 22zm-6-7.1v2.659c.07.553 2.309 2.222 6 2.222s5.931-1.674 6-2.228V14.9a11.49 11.49 0 01-6 1.547A11.489 11.489 0 016 14.9zm0-5.559V12c.07.553 2.309 2.222 6 2.222s5.931-1.674 6-2.228V9.341a11.489 11.489 0 01-6 1.548 11.488 11.488 0 01-6-1.548zm6-5.119c-3.692 0-5.931 1.674-6 2.229.07.549 2.311 2.215 6 2.215s5.931-1.674 6-2.228c-.07-.551-2.311-2.216-6-2.216z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgData;
