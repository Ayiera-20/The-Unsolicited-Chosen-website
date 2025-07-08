import NavBar from "../../components/navbar";
import { useEffect, useState } from "react";
import SectionTransition from "../../components/transition";

const slides = [
  "/src/assets/images/beautiful-japanese-forest-landscape.jpg",
  "/src/assets/images/Intro-background.jpg",
  "/src/assets/images/hero.jpg"
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

    return(
        <SectionTransition> 
            <div className="relative md:h-screen h-[90vh] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {slides.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out 
                        ${index === current ? "opacity-100" : "opacity-0"}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    ))}
                </div>

                <div className="relative z-10">
                    <NavBar />

                </div>
            

            <div className="flex flex-col md:flex-row items-center justify-center backdrop-blur-sm absolute bottom-0 left-0 w-full md:h-[40vh] h-auto   lg:gap-x-20 md:gap-0 gap-2 text-white text-center md:text-left bg-black/30 border-t-2 border-[#799434] pt-10">
                <div className="md:pr-20">
                    <h1 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] md:pl-10">About</h1>
                </div>
                <div>
                    <p className="text-[1.25rem] md:text-[2.5rem] lg:text-[2.8125rem] max-w-117 text-[#F5F1E3]">Grassroots, <br></br> faith-inspired NGO</p>
                </div>
                <div className="flex items-start space-x-8">
                    <div className="w-0.5 h-60 bg-[#818F39]"></div>
                        <div className="text-center md:text-left">
                            <p className="mb-2 lg:text-2xl text-base md:text-lg md:max-w-117 px-2 md:px-0">
                            Committed to transforming Nairobi through cleaner spaces, empowered communities, and practical hope
                            </p>
                            <button className="discover-button" onClick={() => {
                                document.getElementById("mission-section")?.scrollIntoView({ behavior: "smooth" });
                                }}>Discover
                            </button>
                        </div>
                     </div>

                </div>
            
            </div>
        </SectionTransition>
    )
}

export default Hero;