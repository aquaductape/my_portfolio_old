import React from "react";

export default function HeroGradient() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="a">
          <stop offset="0" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="b"
          x1="407.0696"
          y1="2.3634"
          x2="407.0696"
          y2="25.1944"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 3.07896 0 7.2804)"
        />
      </defs>
      <pattern
        id="pattern-gradient"
        x="0"
        y="-20"
        width="950"
        height="170"
        patternUnits="userSpaceOnUse"
        // y="-60"
        // width="1250"
        // height="270"
        viewBox="0 0 908.5405 142.1712"
      >
        <path
          d="M -7.667,-4.1408372 H 914.3264 V 142.52666 H -7.667 Z"
          fill="url(#b)"
          fillRule="evenodd"
        />
      </pattern>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-gradient)"
      />
    </svg>
  );
}
