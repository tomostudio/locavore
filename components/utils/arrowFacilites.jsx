const ArrowFacilities = ({ color = '#fff', position = 'left' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="none"
      viewBox="0 0 20 16"
      className={`w-[13px] sm:w-[20px] h-[8px] sm:h-[16px] ${
        position === 'right' ? 'rotate-180' : ''
      }`}
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

export default ArrowFacilities
