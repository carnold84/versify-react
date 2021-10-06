import * as React from "react";

function SvgHomeHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a1 1 0 01-1-1v-9.643a1.01 1.01 0 01.293-.65l7-7a1 1 0 011.415 0l7 7a.994.994 0 01.292.707V21a1 1 0 01-1 1zM12 5.828l-6 6V20h12v-8.172l-6-6zm0 12.171a22.972 22.972 0 00-.692-.582l-.047-.038c-1.157-.944-2.6-2.119-2.6-3.58A1.8 1.8 0 0110.5 12a2.008 2.008 0 011.5.667A2.009 2.009 0 0113.5 12a1.8 1.8 0 011.835 1.8c0 1.466-1.452 2.649-2.618 3.6l-.057.047c-.237.194-.461.377-.661.554l.001-.002z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgHomeHeart;
