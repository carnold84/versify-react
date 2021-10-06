import * as React from "react";

function SvgUserHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 19h2a4 4 0 018 0h2a6 6 0 00-12 0zM4 8a4 4 0 118 0 4 4 0 01-8 0zm2.002-.029A2 2 0 0010 8.09V8a2 2 0 00-3.998-.029zM18.339 15a22.972 22.972 0 00-.692-.583l-.047-.038-.006-.004C16.438 13.432 15 12.258 15 10.799A1.8 1.8 0 0116.839 9a2.008 2.008 0 011.5.667 2.009 2.009 0 011.5-.667 1.8 1.8 0 011.835 1.8c0 1.465-1.45 2.647-2.615 3.598l-.003.002-.057.047-.018.015c-.23.189-.448.367-.643.54l.001-.003z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserHeart;
