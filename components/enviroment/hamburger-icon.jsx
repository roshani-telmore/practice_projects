import * as React from "react"

const HamburgerIcon = (props) => (
  <svg
    width={34}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 2h30M2 20h30M2 11h30"
      stroke="#4DC66F"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </svg>
)

export default HamburgerIcon