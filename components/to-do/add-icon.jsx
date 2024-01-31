import * as React from "react"

function AddIcon(props) {
  return (
    <svg
      width={65}
      height={65}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.5 64C49.897 64 64 49.897 64 32.5S49.897 1 32.5 1 1 15.103 1 32.5 15.103 64 32.5 64zM33 20v25M20 33h25"
        stroke="#07C7A4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AddIcon
