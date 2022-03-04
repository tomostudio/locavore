import React from 'react';
import FancyLink from '../../utils/fancyLink';
import ArticleCard from './articleCard';

const IssueCard = ({
  destination = '/',
  className = '',
  issueNo = '',
  articleClassName,
  title,
  category,
  timeRead,
  bgColor,
  borderColor,
  thumbnail,
  alt,
}) => {
  return (
    <FancyLink
      destination={destination}
      className={`group article-issue-card relative rounded-2xl px-5 pb-5 max-md:px-4 max-md:pb-4 flex flex-col bg-lightGray odd:bg-lighterGray  ${className}`}
    >
      <div className='text-center w-full pt-4 pb-3 max-md:pt-3 max-md:pb-2'>
        <span>ISSUE {issueNo}</span>
      </div>
      <ArticleCard
        className={`hover:shadow-darker hover:-rotate-1 group-even:hover:rotate-1 ${articleClassName}`}
        title={title}
        bgColor={bgColor}
        category={category}
        timeRead={timeRead}
        border={borderColor}
        src={thumbnail}
        alt={alt}
      />
    </FancyLink>
  );
};

export default IssueCard;
