import * as React from "react"

function EllipseLeftArrow(props) {
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
        cx={21.2459}
        cy={21.7541}
        r={20.2459}
        transform="rotate(90 21.246 21.754)"
        stroke="#2B5165"
        strokeWidth={2}
      />
      <path
        d="M10.447 21.224a.75.75 0 000 1.06l4.773 4.774a.75.75 0 001.06-1.061l-4.242-4.243 4.242-4.242a.75.75 0 00-1.06-1.061l-4.773 4.773zm21.422-.22H10.977v1.5H31.87v-1.5z"
        fill="#2B5165"
      />
    </svg>
  )
}

export default EllipseLeftArrow
