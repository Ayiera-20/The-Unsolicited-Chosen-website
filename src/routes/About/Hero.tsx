import recyc from "../../assets/images/Intro-background.jpg"
import NavBar from "../../components/navbar";

const Hero = () => {
    return(
        <div> 
            <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${recyc})`}}
        >
            <NavBar />

            <div className="flex items-center justify-center backdrop-blur-sm absolute bottom-0 left-0 w-full h-[50vh] gap-x-20 text-white bg-black/30 border-t-2 border-[#799434]">
                <div className="pr-20">
                    <h1 className="text-[36px] pl-10">About</h1>
                    </div>
                <div>
                    <p className="text-[45px] max-w-117">Grassroots, <br></br> faith-inspired NGO</p>
                </div>
                <div className="flex items-start space-x-8">
                    <div className="w-0.5 h-60 bg-[#799434]"></div>
                    <div>
                        <p className="mb-2 text-2xl max-w-117">
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