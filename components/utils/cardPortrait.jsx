const CardPortrait = ({ className, title, category, timeRead, image }) => {
  return (
    <div
      className={`w-72 h-full rounded-2xl p-6 flex flex-col ${className}`}
    >
      <h3 className="text-2xl m-0 p-0">{title}</h3>
      <div className="pb-3 mt-3 w-full flex justify-between border-b border-black">
        <span>{category}</span>
        <span className="font-subtitle italic">{timeRead}</span>
      </div>
      <div className="mt-6 w-full h-full rounded-xl bg-white" />
    </div>
  )
}

export default CardPortrait
