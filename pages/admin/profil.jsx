import * as React from "react"

const Profile = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z"
      stroke="#898989"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z"
      stroke="#898989"
      strokeWidth={1.429}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Profile