import * as React from "react";

function SvgMention(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8c1.407 0 2.79-.37 4.001-1.07L15 17.197A5.997 5.997 0 0112 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.871c0 .654-.42 1.129-1 1.129-.551 0-1-.449-1-1V9h-1.382A3.966 3.966 0 0012 8c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.05 0 2-.415 2.714-1.08A2.981 2.981 0 0017 16c1.682 0 3-1.374 3-3.129V12c0-4.411-3.589-8-8-8zm0 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgMention;
