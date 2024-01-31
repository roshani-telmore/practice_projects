import * as React from "react"

function EllipseRight(props) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={28}
        cy={28}
        r={26.5}
        transform="rotate(-90 28 28)"
        stroke="#2B5165"
        strokeWidth={3}
      />
      <path
        d="M42.24 28.707a1 1 0 000-1.414l-6.364-6.364a1 1 0 00-1.414 1.414L40.12 28l-5.657 5.657a1 1 0 101.414 1.414l6.364-6.364zM14 29h27.533v-2H14v2z"
        fill="#2B5165"
      />
    </svg>
  )
}

export default EllipseRight
