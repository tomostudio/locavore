import FancyLink from './fancyLink'

const Link = () => {
  return (
    <div id="link">
      <div className="dropdown">
        <span>Link</span>
        <div className="dropdown-content">
          <FancyLink destination="/editorial">Editorial</FancyLink>
          <FancyLink destination="/editorial/meta">Editorial Slug</FancyLink>
          <FancyLink destination="/under_construction">
            Under Construction
          </FancyLink>
          <FancyLink destination="/under_construction/test">UC Slug</FancyLink>
          <FancyLink destination="/family">Family</FancyLink>
          <FancyLink destination="/search">Search</FancyLink>
          <FancyLink destination="/article/full">Article Full</FancyLink>
          <FancyLink destination="/article/caroussel">
            Article Caroussel
          </FancyLink>
          <FancyLink destination="/article/gallery">Article Gallery</FancyLink>
          <FancyLink destination="/article/video">Article Video</FancyLink>
          <FancyLink destination="/social">Social</FancyLink>
        </div>
      </div>
    </div>
  )
}

export default Link
