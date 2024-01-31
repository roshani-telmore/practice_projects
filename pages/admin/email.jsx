import * as React from "react"

const Email = (props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.495 8.851-4.443 3.613c-.84.666-2.02.666-2.86 0L6.71 8.851"
      stroke="#898989"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M17.501 21c3.042.008 5.091-2.49 5.091-5.562V8.57c0-3.071-2.05-5.57-5.09-5.57H7.683C4.642 3 2.593 5.499 2.593 8.57v6.868c0 3.071 2.05 5.57 5.09 5.562h9.818Z"
      stroke="#898989"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Email
