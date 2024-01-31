import * as React from "react"

function SavedIcon(props) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_1_7)">
        <circle cx={60} cy={56} r={32} fill="#5D84A7" />
      </g>
      <path
        d="M51.75 44h16.5c.199 0 .39.082.53.229.141.146.22.345.22.552v22.437c0 .152-.042.3-.122.427a.759.759 0 01-.326.289.722.722 0 01-.81-.14L60 60.403l-7.743 7.391a.722.722 0 01-.81.14.759.759 0 01-.325-.288.805.805 0 01-.122-.428V44.781c0-.207.079-.406.22-.552a.735.735 0 01.53-.229z"
        fill="#FFFCFF"
      />
      <defs>
        <filter
          id="filter0_d_1_7"
          x={0}
          y={0}
          width={120}
          height={120}
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
          <feGaussianBlur stdDeviation={14} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.313726 0 0 0 0 0.25098 0 0 0 0 0.631373 0 0 0 0.6 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_7" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SavedIcon
