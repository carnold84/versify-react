import * as React from "react";

function SvgInvision(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.362 20.993H4.638c-.9-.001-1.63-.73-1.63-1.63V4.637c.001-.9.73-1.629 1.63-1.63h14.723c.9.001 1.63.73 1.632 1.63v14.724c-.001.9-.73 1.63-1.63 1.631zM6.673 9.67l-.388 1.43h1.278l-.826 3.366c-.06.266-.094.538-.1.811a1.444 1.444 0 001.621 1.584c.93-.04 1.765-.58 2.183-1.412l-.327 1.3h1.811l1.033-4.14c.26-1.06.772-1.6 1.52-1.6a.907.907 0 01.97.983c.003.197-.026.393-.085.581l-.528 1.906a2.904 2.904 0 00-.114.812 1.48 1.48 0 001.651 1.566c1.03 0 1.748-.7 2.137-2.08l-.707-.274c-.276.79-.57 1.173-.9 1.173-.24 0-.368-.167-.368-.484.007-.166.032-.331.075-.492l.52-1.858c.118-.382.179-.78.18-1.18a1.9 1.9 0 00-1.855-2.11 3.13 3.13 0 00-2.406 1.761l.36-1.617H10.62l-.39 1.4h1.293l-.8 3.188a2.09 2.09 0 01-1.826 1.383.515.515 0 01-.092-.007c-.243-.057-.384-.15-.384-.452.006-.25.043-.498.11-.738l1.216-4.8H6.673zm2.345-3.162a1.09 1.09 0 100 2.18v-.025c.292.002.572-.11.781-.314.205-.202.32-.478.317-.766a1.089 1.089 0 00-1.098-1.075z"
        fill="inherit"
      />
    </svg>
  );
}

export default SvgInvision;