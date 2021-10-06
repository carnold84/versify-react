import * as React from "react";

function SvgCoffeeTogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.13 3.008A2 2 0 016.866 2h10.268a2 2 0 011.736 1.008l1.143 2c.648 1.134.049 2.503-1.09 2.887.005.082.004.164-.002.247l-.857 12A2 2 0 0116.069 22H7.93a2 2 0 01-1.995-1.858l-.857-12a2.023 2.023 0 01-.003-.247c-1.138-.384-1.737-1.753-1.09-2.887l1.144-2zM7.074 8l.214 3h9.424l.214-3H7.074zm.643 9l.214 3h8.138l.214-3H7.717zm10.56-11l-1.143-2H6.866L5.723 6h12.554z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgCoffeeTogo;
