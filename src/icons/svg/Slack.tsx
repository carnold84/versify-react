import * as React from "react";

function SvgSlack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.641 22.024a2.107 2.107 0 01-2.1-2.106v-2.107h2.1a2.107 2.107 0 110 4.214v-.001zm-5.282 0a2.107 2.107 0 01-2.1-2.106v-5.274a2.104 2.104 0 014.207 0v5.274a2.107 2.107 0 01-2.107 2.106zm10.55-5.273h-5.268a2.106 2.106 0 110-4.213h5.268a2.106 2.106 0 110 4.213zm-15.817 0a2.106 2.106 0 110-4.213h2.1v2.106a2.107 2.107 0 01-2.105 2.107h.005zm15.817-5.289h-2.1V9.356a2.1 2.1 0 112.1 2.106zm-5.268 0a2.107 2.107 0 01-2.1-2.106V4.082a2.103 2.103 0 114.207 0v5.274a2.107 2.107 0 01-2.107 2.106zm-5.282 0H4.092a2.106 2.106 0 110-4.213H9.36a2.106 2.106 0 110 4.213zm2.1-5.273h-2.1a2.106 2.106 0 112.1-2.107V6.189z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgSlack;
