import NavBar from "./navbar";

type ReusableHeroSectionProps = {
  backgroundImage: string;
  heading: string;
  description: string;
  description2: string;
  button?: string;
  height?: string;
};

const ReusableHeroSection = ({
  backgroundImage,
  heading,
  description,
  description2,
  button,
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
                <h1 className="text-[2.5rem] md:text-[3.125rem] lg:text-[4rem] pb-6 text-[#F5F1E3]">{heading}</h1>
                <p className=" lg:text-xl  md:text-lg text-[1rem]">{description}</p>
                <p className=" lg:text-xl  md:text-lg text-[1rem]">{description2}</p>
                {button && <button className="discover-button">{button}</button>}
            </div>

        </div>
  );
};

export default ReusableHeroSection;
