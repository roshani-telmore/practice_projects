import * as React from "react"

function RightSideArrow(props) {
  return (
    <svg
      width={24}
      height={16}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 0l-1.41 1.41L20.17 7H0v2h20.17l-5.59 5.58L16 16l8-8-8-8z"
        fill="#FBD784"
      />
    </svg>
  )
}

export default RightSideArrow
