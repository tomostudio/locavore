import FancyLink from './fancyLink';

const Link = () => {
  return (
    <div id='link'>
      <div className='dropdown'>
        <span className='content'>Link</span>

        <div className='dropdown-content'>
          <FancyLink destination='/editorial'>Editorial List</FancyLink>
          <FancyLink destination='/editorial/metamorphosis'>
            Metamorphosis Content
          </FancyLink>
          <FancyLink destination='/editorial/metamorphosis-landing'>
            Metamorphosis Landing
          </FancyLink>
          <FancyLink destination='/editorial/search'>
            Editorial Search
          </FancyLink>
          <FancyLink destination='/editorial/under_construction'>
            UC Content
          </FancyLink>
          <FancyLink destination='/article/full'>Article Full</FancyLink>
          <FancyLink destination='/article/caroussel'>
            Article Caroussel
          </FancyLink>
          <FancyLink destination='/article/gallery'>Article Gallery</FancyLink>
          <FancyLink destination='/article/video'>Article Video</FancyLink>
          <FancyLink destination='/family'>Family</FancyLink>
          <FancyLink destination='/social'>Social</FancyLink>
        </div>
      </div>
    </div>
  );
};

export default Link;
