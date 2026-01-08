type HeroImageSource = {
  src: string;
  srcSet?: string;
  webpSrcSet?: string;
  sizes?: string;
  alt?: string;
};

type ReusableHeroSectionProps = {
  backgroundImage: string | HeroImageSource;
  heading: string;
  description: string;
  description2: string;
  button?: string;
  height?: string;
  scrollToId?: string;
};

const ReusableHeroSection = ({
  backgroundImage,
  heading,
  description,
  description2,
  button,
  scrollToId,
  height = 'h-screen',
}: ReusableHeroSectionProps) => {
  const heroImage: HeroImageSource =
    typeof backgroundImage === 'string'
      ? { src: backgroundImage }
      : backgroundImage;

  return (
    <div className={`relative lg:${height} md:h-[80vh] h-[64vh] w-full overflow-hidden`}>
      <picture className="absolute inset-0 z-0 h-full w-full">
        {heroImage.webpSrcSet && (
          <source type="image/webp" srcSet={heroImage.webpSrcSet} sizes={heroImage.sizes ?? '100vw'} />
        )}
        <img
          className="h-full w-full object-cover object-center"
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          sizes={heroImage.sizes ?? '100vw'}
          alt={heroImage.alt ?? ''}
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none"></div>
      
      <div className="items-center relative z-20 flex flex-col justify-center h-full text-white text-center md:px-0 px-4 head-fade">
        <h1 className="text-[1.75rem] md:text-[3.125rem] lg:text-[4rem] pb-6 text-[#F5F1E3] slide">{heading}</h1>
        <p className=" lg:text-xl  md:text-lg text-[1rem]">{description}</p>
        <p className=" lg:text-xl  md:text-lg text-[1rem]">{description2}</p>
        {button && (
          <button
            className="discover-button mt-4"
            onClick={() => {
              if (scrollToId) {
                document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReusableHeroSection;
