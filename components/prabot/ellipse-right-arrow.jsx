import * as React from "react"

function EllipseRightArrow(props) {
  return (
    <svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={21.7541}
        cy={21.7541}
        r={21.2459}
        transform="rotate(-90 21.754 21.754)"
        fill="#2B5165"
      />
      <path
        d="M32.553 22.285a.75.75 0 000-1.061L27.78 16.45a.75.75 0 00-1.06 1.06l4.242 4.243-4.242 4.243a.75.75 0 101.06 1.06l4.773-4.772zm-21.422.22h20.892v-1.5H11.131v1.5z"
        fill="#fff"
      />
    </svg>
  )
}

export default EllipseRightArrow
