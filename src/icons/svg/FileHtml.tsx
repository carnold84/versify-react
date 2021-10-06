import * as React from "react";

function SvgFileHtml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7a.104.104 0 01.027 0h.006a.15.15 0 00.029.006c.088.006.175.023.259.051H13.363a.421.421 0 01.052.043.988.988 0 01.293.2l6 6a.987.987 0 01.2.293.735.735 0 01.023.066l.01.028c.028.083.044.17.049.258a.1.1 0 00.007.029v.006A.112.112 0 0120 9v11a2 2 0 01-2 2zm-1.739-7v4H18.5v-.67h-1.426V15h-.813zm-1.4 1.258l-.074 1.659V19h.815v-4h-1.057l-.757 2.894-.76-2.894h-1.061v4h.813v-1.083l-.08-1.667.8 2.75h.554l.807-2.742zM8.712 15v.673h.978V19h.815v-3.327h.995V15H8.712zm-2.4 2.289h1.2V19h.81v-4h-.81v1.618h-1.2V15H5.5v4h.812v-1.711zM13 4v5h5l-5-5z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFileHtml;
