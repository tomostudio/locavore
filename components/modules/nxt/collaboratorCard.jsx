import FancyLink from "@/components/utils/fancyLink";
import { useMediaQuery } from "@/helpers/functional/checkMedia";
import urlFor from "@/helpers/sanity/urlFor";
import Image from "next/legacy/image";

const CollaboratorCard = ({ collaboratorListAPI, itemToShow }) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const isMd = useMediaQuery("(min-width: 850px)");
  const is2xl = useMediaQuery("(min-width: 1536px)");
  const columnCount = is2xl ? 4 : isMd ? 3 : 2;

  const desktopList = collaboratorListAPI.slice(0, itemToShow);
  const lastRowStart =
    columnCount * (Math.ceil(desktopList.length / columnCount) - 1);

  return (
    <>
      {isDesktop
        ? desktopList.map((data, id) => (
            <FancyLink
              destination={`/nxt/collaborators/${data.slug.current}`}
              className={`w-full border-white setflex-center text-white py-8 px-12 lg:px-14 xl:py-10 xl:px-20 transition-all duration-300 group hover:text-black hover:bg-[#BEC29D] ${
                id >= lastRowStart ? "is-last-row" : ""
              }`}
              key={id}
            >
              <div className="w-full h-full flex flex-col">
                <span className="italic font-serif text-[1.375rem] text-left mb-2 leading-none">
                  {data.workRole}
                </span>
                <div className="w-full relative">
                  <div className="relative aspect-[3/2] sm:aspect-[6/5] w-full rounded-md overflow-hidden mr-1">
                    <Image
                      src={urlFor(data.thumbnail.imageBnw).width(600).url()}
                      alt={data.thumbnail.imageBnw.alt}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={urlFor(data.thumbnail.imageBnw)
                        .blur(2)
                        .format("webp")
                        .width(100)
                        .url()}
                      className="group-hover:opacity-0"
                    />
                    <Image
                      src={urlFor(data.thumbnail.imageColor).width(600).url()}
                      alt={data.thumbnail.imageColor.alt}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={urlFor(data.thumbnail.imageColor)
                        .blur(2)
                        .format("webp")
                        .width(100)
                        .url()}
                      className="opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <span className="absolute -right-2 uppercase translate-x-full h-full top-0 leading-none text-d-small writing-mode-vertical text-left">
                    {data.location}
                  </span>
                </div>
                <span className="font-bold text-[1.875rem] max-w-[300px] text-left mt-4 leading-tight line-clamp-2">
                  {data.title}
                </span>
              </div>
            </FancyLink>
          ))
        : collaboratorListAPI.map((data, id) => (
            <FancyLink
              key={id}
              destination={`/nxt/collaborators/${data.slug.current}`}
              className="w-full flex flex-col px-5"
            >
              <div className="relative w-full aspect-[3/2] border border-white rounded-t-2xl overflow-hidden">
                <Image
                  src={urlFor(data.thumbnail.imageBnw).width(600).url()}
                  alt={data.thumbnail.imageBnw.alt}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={urlFor(data.thumbnail.imageBnw)
                    .blur(2)
                    .format("webp")
                    .width(100)
                    .url()}
                  className="group-hover:opacity-0"
                />
                <Image
                  src={urlFor(data.thumbnail.imageColor).width(600).url()}
                  alt={data.thumbnail.imageColor.alt}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={urlFor(data.thumbnail.imageColor)
                    .blur(2)
                    .format("webp")
                    .width(100)
                    .url()}
                  className="opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative bottom-5 w-full flex flex-col py-5 px-7 bg-black text-white border border-white rounded-2xl">
                <div>
                  <span className="italic font-serif">{data.workRole}</span>
                  {` `}— <span className="text-m-body">{data.location}</span>
                </div>
                <span className="font-bold text-d-body text-left mt-2 leading-tight">
                  {data.title}
                </span>
              </div>
            </FancyLink>
          ))}
    </>
  );
};

export default CollaboratorCard;
