import * as React from "react";

function SvgTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.897 21.968c-.53.002-1.04-.21-1.414-.586l-7.837-7.835a1.993 1.993 0 01-.58-1.567l.5-6.566a1.989 1.989 0 011.848-1.841l6.566-.5c.052-.011.103-.011.155-.011.53 0 1.037.21 1.41.586l7.838 7.834a2 2 0 010 2.829l-7.072 7.071a1.987 1.987 0 01-1.414.586zM8.654 6.654a2 2 0 101.415 3.414l.007-.006.007-.007-.008.007a2 2 0 00-1.421-3.408z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgTag;