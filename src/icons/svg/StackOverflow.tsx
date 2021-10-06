import * as React from "react";

function SvgStackOverflow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.84 20.999H4.381v-6.4h1.6v4.8h11.26v-4.8h1.6v6.4zm-3.2-3.2H7.581v-1.6h8.055v1.6h.004zm0-2L7.781 14.16l.338-1.552 7.861 1.642-.343 1.549h.003zm.44-2.037l-7.28-3.4v-.006l.673-1.457 7.281 3.4-.673 1.464-.002-.001zm.922-1.845l-6.17-5.14h.01l1.012-1.214 6.162 5.136L17 11.918l.003-.001zm1.308-1.5l-4.807-6.449 1.31-.969L19.62 9.45l-1.312.971.003-.004z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgStackOverflow;