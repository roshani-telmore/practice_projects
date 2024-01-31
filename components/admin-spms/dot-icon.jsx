import * as React from "react"

const DotIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={7} cy={12} r={2} transform="rotate(-90 7 12)" fill="#535356" />
    <circle
      cx={17}
      cy={12}
      r={2}
      transform="rotate(-90 17 12)"
      fill="#535356"
    />
  </svg>
)

export default DotIcon
