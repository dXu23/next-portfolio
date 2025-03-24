import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={125}
    height={125}
    viewBox="0 0 119.063 119.063"
    {...props}
  >
    <path
      d="M23.186 33.073h32.877l16.44 21.167L88.94 33.073h8.22L76.612 59.53 97.161 85.99h-8.22L72.502 64.823 56.063 85.99H23.186v-5.292h28.768L68.393 59.53l-16.44-21.166H23.187z"
      style={{
        fill: "var(--theme-magenta)",
        fillOpacity: 1,
        strokeWidth: ".264583px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M34.298 43.656v31.75h13.02L59.53 59.531 47.318 43.656z"
      style={{
        fill: "var(--theme-cyan)",
        fillOpacity: 1,
        strokeWidth: ".264583px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
    />
  </svg>
);

export default Logo;
