import * as React from "react"

function ProductArrow(props) {
  return (
    <svg
      width={32}
      height={16}
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.707 8.707a1 1 0 000-1.414L25.343.929a1 1 0 10-1.414 1.414L29.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h31V7H0v2z"
        fill="#fff"
      />
    </svg>
  )
}

export default ProductArrow
