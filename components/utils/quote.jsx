const Quote = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1.1"
      viewBox="0 0 8.467 8.467"
    >
      <defs>
        <clipPath id="clipPath1198" clipPathUnits="userSpaceOnUse">
          <path d="M0 283.465h283.465V0H0z"></path>
        </clipPath>
      </defs>
      <g>
        <g transform="matrix(.05232 0 0 -.0534 -3.182 11.799)">
          <g clipPath="url(#clipPath1198)">
            <g transform="translate(204.434 212.465)">
              <path
                fill="none"
                stroke={color}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="5.669"
                d="M0 0c-62.11-16.438-58.229-82.972-58.229-82.972l-.197-58.493h69.178v61.848h-40.784s-2.689 47.506 40.336 59.607"
              ></path>
            </g>
            <g transform="translate(131.454 132.848)">
              <path
                fill="none"
                stroke={color}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="5.669"
                d="M0 0h-34.782s-2.689 47.506 40.336 59.607"
              ></path>
            </g>
            <g transform="translate(126.704 212.465)">
              <path
                fill="none"
                stroke={color}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="5.669"
                d="M0 0c-62.111-16.438-58.229-82.972-58.229-82.972l-.197-58.493H4.749"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Quote
