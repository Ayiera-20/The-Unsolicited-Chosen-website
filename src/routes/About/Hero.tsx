
import NavBar from "../../components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import bg from "../../assets/images/collectingGarbage.jpg"
import bg1 from "../../assets/images/nature.jpg"
import recyc from "../../assets/images/Intro-background.jpg"

const backgrounds = [recyc, bg, bg1];
const Hero = () => {
    return(
        <div> 
            <div className="relative md:h-screen h-[90vh]">
                <Swiper
                    modules={[Autoplay]}
                    direction="vertical"
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop
                    className="absolute top-0 left-0 w-full h-full z-0"
                >
                {backgrounds.map((bg, index) => (
                <SwiperSlide key={index}>
                    <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                    />
                </SwiperSlide>
                ))}
                </Swiper>
  <div className="relative z-20">
    <NavBar />
    
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
                            <button className="discover-button">Discover</button>
                        </div>
                     </div>

                </div>
            
            </div>
  </div>
            

            
        </div>
    )
}

export default Hero;