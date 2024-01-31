import * as React from "react"

function DeleteIcon(props) {
  return (
    <svg
      width={22}
      height={26}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 5.8h19.806"
        stroke="#F76363"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.502 5.8V3.4c0-.637.231-1.247.644-1.697C7.56 1.253 8.12 1 8.702 1h4.401c.584 0 1.144.253 1.556.703.413.45.645 1.06.645 1.697v2.4m3.301 0v16.8c0 .636-.232 1.247-.645 1.697-.412.45-.972.703-1.556.703H5.401a2.112 2.112 0 01-1.556-.703 2.515 2.515 0 01-.644-1.697V5.8h15.404z"
        stroke="#F76363"
        strokeOpacity={0.76}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.702 11.8V19M13.104 11.8V19"
        stroke="#FF6A6A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DeleteIcon
