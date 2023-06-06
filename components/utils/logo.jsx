const Logo = ({color = "#fff"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="32"
      fill="none"
      viewBox="0 0 22 32"
    >
      <path
        fill={color}
        d="M5.725 24.136L0 21.44V0l2.077.837V19.18l3.648 1.681v3.275zM7.831 25.13L5.284 2.13l2.251.908 1.81 17.937L11.19 4.512l2.337.943-2.686 21.091-3.009-1.417zM15.41 28.7V6.198L22 8.854v3.477l-4.304-1.779v6.179l3.134 1.353v3.465l-3.134-1.386v6.18L22 28.326v3.478L15.41 28.7z"
      ></path>
    </svg>
  )
}

export default Logo
