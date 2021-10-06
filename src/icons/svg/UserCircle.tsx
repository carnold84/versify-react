import * as React from "react";

function SvgUserCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22a9.9 9.9 0 01-4.364-1 10.053 10.053 0 01-1.425-.845l-.137-.1a10.09 10.09 0 01-2.964-3.471A9.89 9.89 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.891 9.891 0 01-1.109 4.582 10.09 10.09 0 01-2.96 3.47c-.467.342-.963.643-1.482.9l-.08.04A9.9 9.9 0 0112 22zm0-5a3.99 3.99 0 00-3.557 2.167 8.014 8.014 0 007.114 0v-.005A3.987 3.987 0 0012 17zm0-2a6.015 6.015 0 015.23 3.056l.014-.013.014-.012-.017.015-.01.008a8 8 0 10-10.46 0A6.016 6.016 0 0112.001 15zm0-1a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgUserCircle;
