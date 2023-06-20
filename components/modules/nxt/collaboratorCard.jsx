import FancyLink from '@/components/utils/fancyLink'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import Image from 'next/image'

const CollaboratorCard = ({
  data,
  role,
  location,
  title,
  image,
  image_bnw,
  itemToShow,
}) => {
  const removeBorderLastRow = (data, index) => {
    // desktop column
    let rowCountDesktop = 3
    let columnCountDesktop = Math.ceil(data.length / rowCountDesktop)

    // mobile column
    let rowCountMobile = 2
    let columnCountMobile = Math.ceil(data.length / rowCountMobile)

    // check row desktop
    const lastRowDivsDesktop = []
    for (
      var i = rowCountDesktop * (columnCountDesktop - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsDesktop.push(i)
    }

    // check row mobile
    const lastRowDivsMobile = []
    for (
      var i = rowCountMobile * (columnCountMobile - 1);
      i < data.length;
      i++
    ) {
      lastRowDivsMobile.push(i)
    }

    if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b'
    } else if (
      !lastRowDivsDesktop.find((e) => e === index) &&
      lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'md:border-b'
    } else if (
      lastRowDivsDesktop.find((e) => e === index) &&
      !lastRowDivsMobile.find((e) => e === index)
    ) {
      return 'border-b md:border-b-0'
    } else {
      return ''
    }
  }

  return (
    <>
      {useMediaQuery('(min-width: 600px)')
        ? data.slice(0, itemToShow).map((_, id) => (
            <FancyLink
              destination="/nxt/collaborators/detail"
              className={`w-[calc(100%/2)] md:w-[calc(100%/3)] ${removeBorderLastRow(
                data.slice(0, itemToShow),
                id,
              )} border-white setflex-center text-white p-10 transition-all duration-300 group hover:text-black hover:bg-[#BEC29D]`}
              key={id}
            >
              <div className="h-full flex flex-col">
                <span className="italic font-serif text-[1.375rem] text-left mb-1">
                  {role}
                </span>
                <div className="w-full flex">
                  <div className="relative aspect-[3/2] sm:aspect-[6/5] w-full rounded-md overflow-hidden mr-1">
                    <Image
                      src={image_bnw}
                      alt=""
                      fill
                      className="object-cover group-hover:hidden"
                    />
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover hidden group-hover:block"
                    />
                  </div>
                  <span className="text-d-small writing-mode-vertical text-left">
                    {location}
                  </span>
                </div>
                <span className="font-bold text-[1.875rem] max-w-[300px] text-left mt-4 leading-tight">
                  {title}
                </span>
              </div>
            </FancyLink>
          ))
        : data.map((_, id) => (
            <FancyLink
              key={id}
              destination="/nxt/collaborators/detail"
              className="w-full flex flex-col"
            >
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={image_bnw}
                  alt=""
                  fill
                  className="object-cover group-hover:hidden"
                />
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover hidden group-hover:block"
                />
              </div>
              <div className="relative bottom-5 w-full flex flex-col pt-5 px-7 bg-black text-white border-t border-white rounded-t-2xl">
                <div>
                  <span className="italic font-serif">{role}</span>
                  {` `}— <span className="text-m-body">{location}</span>
                </div>
                <span className="font-bold text-d-body text-left mt-2 leading-tight">
                  {title}
                </span>
              </div>
            </FancyLink>
          ))}
    </>
  )
}

export default CollaboratorCard
