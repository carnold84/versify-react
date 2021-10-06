import * as React from "react";

function SvgFilterOffOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.414.414L7 1.828 8.172 3H4a1 1 0 00-1 1v2.59c0 .523.213 1.037.583 1.407L9 13.414V21a1.001 1.001 0 001.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l1.793-1.793 2.935 2.935 1.414-1.414L8.414.414zm6.965 9.793l-2.086 2.086A.996.996 0 0013 13v5.382l-2 1V13a.996.996 0 00-.293-.707L5 6.59V5h5.172l5.207 5.207zM20 3h-6.172l2 2h3.173l.002 1.583-.796.796 1.414 1.414.796-.796c.37-.37.583-.884.583-1.407V4a1 1 0 00-1-1z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFilterOffOutline;