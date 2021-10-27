import FancyLink from './fancyLink';

const Link = () => {
  return (
    <div id='link'>
      <div className='dropdown'>
        <span className='content'>Link</span>

        <div className='dropdown-content'>
          <FancyLink destination='/editorial'>Editorial - Index</FancyLink>
          <FancyLink destination='/editorial/search'>
            Editorial - Search
          </FancyLink>
          <FancyLink destination='/editorial/metamorphosis'>
            Issue - Metamorphosis (Landing)
          </FancyLink>
          <FancyLink destination='/editorial/uc'>
            Issue - Under Construction (Landing)
          </FancyLink>
          <FancyLink destination='/editorial/issue-index'>
            Issue - Index
          </FancyLink>
          <FancyLink destination='/article/blog'>Article - Blog</FancyLink>
          <FancyLink destination='/article/caroussel'>
            Article - Caroussel
          </FancyLink>
          <FancyLink destination='/article/gallery'>Article - Gallery</FancyLink>
          <FancyLink destination='/article/video'>Article - Video</FancyLink>
          <FancyLink destination='/family'>Family</FancyLink>
          <FancyLink destination='/family/rooster'>
            Family - Night Rooster
          </FancyLink>
          <FancyLink destination='/social'>Social</FancyLink>
        </div>
      </div>
    </div>
  );
};

export default Link;
