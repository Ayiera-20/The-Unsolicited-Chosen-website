import heroImage from "../../assets/images/hero.jpg"
import NavBar from "../../components/navbar";


const HeroSection = () => {
    return(
        <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${heroImage})`}}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative">
                <NavBar />

            </div>
            
            <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
                <p className="font-bold text-[32px]">Welcome</p>
                <h1 className="font-bold md:text-[64px]">Cleaning Nairobi. Restoring Dignity. <br></br>Inspiring Change.</h1>
                <button className="border-2 border-[#799434] px-12 py-4 md:text-2xl font-bold mt-16 backdrop-blur-md">Discover</button>
            </div>

        </div>
    );
}

export default HeroSection;