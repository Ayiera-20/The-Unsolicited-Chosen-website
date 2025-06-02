import NavBar from "./navbar";

type ReusableHeroSectionProps = {
  backgroundImage: string;
  heading: string;
  description: string;
  description2: string;
  height?: string;
};

const ReusableHeroSection = ({
  backgroundImage,
  heading,
  description,
  description2,
  height = 'h-screen',
}: ReusableHeroSectionProps) => {
  return (
    <div className={`relative ${height} w-full bg-cover bg-center bg-no-repeat`}
        style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative">
                <NavBar />

            </div>
            
            <div className="items-center relative flex flex-col justify-center h-full text-white text-center">
                <h1 className="md:text-[64px] pb-6">{heading}</h1>
                <p className=" text-[32px]">{description}</p>
                <p className=" text-[32px]">{description2}</p>
            </div>

        </div>
  );
};

export default ReusableHeroSection;
