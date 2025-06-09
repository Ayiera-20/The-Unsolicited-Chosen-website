import recyc from "../../assets/images/Intro-background.jpg"
import NavBar from "../../components/navbar";

const Hero = () => {
    return(
        <div> 
            <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${recyc})`}}
            >
            <NavBar />

            <div className="flex items-center justify-center backdrop-blur-sm absolute bottom-0 left-0 w-full h-[40vh] gap-x-20 text-white bg-black/30 border-t-2 border-[#799434] pt-10">
                <div className="pr-20">
                    <h1 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] pl-10">About</h1>
                </div>
                <div>
                    <p className="text-[2rem] md:text-[2.5rem] lg:text-[2.8125rem] max-w-117 text-[#F5F1E3]">Grassroots, <br></br> faith-inspired NGO</p>
                </div>
                <div className="flex items-start space-x-8">
                    <div className="w-0.5 h-60 bg-[#818F39]"></div>
                        <div>
                            <p className="mb-2 lg:text-2xl text-base md:text-lg max-w-117">
                            Committed to transforming Nairobi through cleaner spaces, empowered communities, and practical hope
                            </p>
                            <button className="discover-button">Discover</button>
                        </div>
                     </div>

                </div>
            
            </div>
        </div>
    )
}

export default Hero;