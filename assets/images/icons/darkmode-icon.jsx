import * as React from "react"

function DarkModeIcon(props) {
  return (
    <svg
      width={78}
      height={78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_3_45)">
        <circle cx={39} cy={35} r={35} fill="#fff" />
      </g>
      <circle cx={39.5} cy={34.5} r={21.5} fill="#2D2D2D" />
      <path
        d="M56 34.5C56 43.613 48.389 51 39 51V34.5 18c9.389 0 17 7.387 17 16.5z"
        fill="#fff"
      />
      <defs>
        <filter
          id="filter0_d_3_45"
          x={0}
          y={0}
          width={78}
          height={78}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3_45" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3_45"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default DarkModeIcon
