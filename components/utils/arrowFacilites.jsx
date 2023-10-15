const ArrowFacilitiesDesktop = ({
  color = '#fff',
  position = 'left',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="none"
      viewBox="0 0 20 16"
      className={`${position === 'right' ? 'rotate-180' : ''} ${className}`}
    >
      <path
        fill={color}
        className={`transition-all duration-300 ${
          color === '#fff'
            ? 'group-hover:fill-[#000]'
            : 'group-hover:fill-[#fff]'
        }`}
        d="M.293 7.516a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.415L2.414 8.224l5.657-5.657a1 1 0 00-1.414-1.414L.293 7.516zM20 7.223H1v2h19v-2z"
      ></path>
    </svg>
  )
}

const ArrowFacilitiesMobile = ({
  color = '#fff',
  position = 'left',
  className,
}) => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${position === 'right' ? 'rotate-180' : ''} ${className}`}
    >
      <path
        className={`transition-all duration-300 ${
          color === '#fff'
            ? 'group-hover:fill-[#000]'
            : 'group-hover:fill-[#fff]'
        }`}
        d="M0.646441 3.64645C0.451179 3.84171 0.451179 4.15829 0.646441 4.35355L3.82842 7.53553C4.02368 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.7071 4L4.53553 1.17157C4.73079 0.976311 4.73079 0.659728 4.53553 0.464466C4.34027 0.269204 4.02368 0.269204 3.82842 0.464466L0.646441 3.64645ZM12.4 3.5L0.999994 3.5V4.5L12.4 4.5V3.5Z"
        fill={color}
      />
    </svg>
  )
}

export { ArrowFacilitiesDesktop, ArrowFacilitiesMobile }
