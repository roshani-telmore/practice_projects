import * as React from "react"

function ScrollDownArrow(props) {
  return (
    <svg
      width={16}
      height={24}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 16l-1.41-1.41L9 20.17V0H7v20.17l-5.58-5.59L0 16l8 8 8-8z"
        fill="#fff"
      />
    </svg>
  )
}

export default ScrollDownArrow
