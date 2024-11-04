import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagon with no fill, just an outline */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none" /* Ensure no fill inside the hexagon */
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        {/* Adding the letter R in the center */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48"
          fontWeight="bold"
          fill="currentColor" /* Only the "R" will be filled with the current color */
        >
          R
        </text>
      </g>
    </g>
  </svg>
);

export default IconLogo;
