import * as React from "react"

function PlusIcon(props) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={25} cy={25} r={25} fill="#5D84A7" />
      <path
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        d="M25.6429 17.5L25.6429 33.5"
      />
      <path
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        d="M33.5 25.6429L17.5 25.6429"
      />
    </svg>
  )
}

export default PlusIcon
