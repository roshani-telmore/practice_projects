import * as React from "react"

const TimeCircleIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M21.25 12A9.25 9.25 0 0 1 12 21.25 9.25 9.25 0 0 1 2.75 12 9.25 9.25 0 0 1 12 2.75 9.25 9.25 0 0 1 21.25 12Z"
      stroke="#898989"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m15.432 14.943-3.77-2.25V7.848"
      stroke="#898989"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default TimeCircleIcon
