import * as React from "react";

function SvgDribbble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm-4.88-3.455l-.005.01a8.148 8.148 0 007.939 1.033 34.534 34.534 0 00-1.679-5.977 12.638 12.638 0 00-4.546 2.773 9.68 9.68 0 00-1.65 2.057l-.007.011v-.01l-.018.035-.012.02-.007.013-.017.036.002-.001zm9.659-5.5c-.492 0-.984.034-1.472.1a37.456 37.456 0 011.5 5.463 8.052 8.052 0 003.22-5.127 12.187 12.187 0 00-3.248-.439v.003zm-12.962-1.09v.056a8.181 8.181 0 001.925 5.264 13.522 13.522 0 016.772-5.375l.119-.034c-.177-.391-.343-.74-.509-1.066a31.124 31.124 0 01-8.195 1.155h-.112zm12.649-.606c1.24.005 2.479.118 3.7.338a8.105 8.105 0 00-1.692-4.659 11.791 11.791 0 01-4.4 3.084l.029-.012-.031.013a23.484 23.484 0 01.548 1.233l.041.1c.6-.066 1.202-.099 1.805-.097zM8.377 4.677a8.178 8.178 0 00-4.33 5.414c2.33-.036 4.65-.33 6.915-.878H10.99L11 9.2l.054-.013h.006l.04-.008h.016l.021-.006.04-.01.023-.01.022-.006h.02a51.796 51.796 0 00-2.866-4.47h.001zM12 3.839a8.437 8.437 0 00-1.631.155 45.662 45.662 0 012.879 4.528 9.666 9.666 0 004.036-2.746A8.192 8.192 0 0012 3.839z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgDribbble;
