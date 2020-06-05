import React from "react";

export default function HeroGradient() {
  return (
    <svg
      id="junk-pattern-gradient-container"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" gradientTransform="rotate(90)">
          <stop
            offset="0"
            stopColor="currentColor"
            className="junk-pattern-gradient"
          ></stop>
          <stop
            offset="1"
            stopColor="currentColor"
            className="junk-pattern-gradient"
            stopOpacity="0"
          ></stop>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="53%" fill="url(#grad1)" />
    </svg>
  );
}
