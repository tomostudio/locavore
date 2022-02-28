const Caption = ({ className, option = true, caption, article }) => {
  return (
    <div
      className={`flex items-end max-md:items-startw-full mt-3 max-md:p-0 ${
        option ? 'px-paddingContent' : ''
      } ${className}`}
    >
      <div
        className="w-10 h-5 border-b-2 border-l-2 mr-4"
        style={{
          borderColor: article.setColor
            ? article.setColor === 'articleColor'
              ? article.color.hex
              : article.setColor === 'categoryColor' &&
                article.categoryColor &&
                article.category.color.hex
            : '#D66A51',
        }}
      />
      <span className="w-full font-serif text-base font-bold translate-y-1">{caption}</span>
    </div>
  )
}

export default Caption
