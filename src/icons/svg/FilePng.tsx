import * as React from "react";

function SvgFilePng(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 22H6a2 2 0 01-2-2V4a2 2 0 012-2h7a.104.104 0 01.027 0h.006a.15.15 0 00.029.006c.088.006.175.023.259.051H13.363a.421.421 0 01.052.043.988.988 0 01.293.2l6 6a.987.987 0 01.2.293.735.735 0 01.023.066l.01.028c.028.083.044.17.049.258a.1.1 0 00.007.029v.006A.112.112 0 0120 9v11a2 2 0 01-2 2zm-2.458-8a1.3 1.3 0 00-1.126.545 2.66 2.66 0 00-.384 1.547v.876a2.479 2.479 0 00.419 1.514c.277.348.705.54 1.149.518.271.003.54-.05.791-.154l.021-.009a1.55 1.55 0 00.588-.455v-2.009h-1.469v.742h.6v.893l-.076.06a.689.689 0 01-.414.117.62.62 0 01-.575-.3 2.063 2.063 0 01-.173-.969v-.883c-.016-.317.04-.633.165-.925a.537.537 0 01.507-.292c.16-.013.317.05.423.171.113.191.171.41.17.632H17a2 2 0 00-.41-1.227A1.34 1.34 0 0015.543 14h-.001zm-4.258 1.746l1.259 3.187h.857v-4.866h-.855v3.195l-1.263-3.195h-.862v4.866h.862v-3.187h.002zM7 14.067v4.866h.862v-1.711h.575c.388.02.766-.131 1.032-.414.262-.317.395-.72.373-1.13a1.747 1.747 0 00-.379-1.164 1.253 1.253 0 00-1.009-.447H7zM13 4v5h5l-5-5zM8.454 16.4h-.592v-1.515h.6a.432.432 0 01.37.221c.1.176.148.376.138.578a.9.9 0 01-.135.535.448.448 0 01-.381.181z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgFilePng;
