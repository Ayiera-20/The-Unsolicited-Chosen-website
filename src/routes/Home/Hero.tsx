import heroImage from "../../assets/images/hero.jpg"
import NavBar from "../../components/navbar";
import SectionTransition from "../../components/transition";



const HeroSection = () => {
    return(
        // <SectionTransition bgColor="#184E35">
        // <div className="relative h-[70vh] lg:h-screen w-full bg-cover bg-center bg-no-repeat animate-bg-fade animate-zoom-in "
        // style={{backgroundImage: `url(${heroImage}), zIndex: 0`}}
        // >
        //     <div className="absolute inset-0 bg-black/50 z-0"></div>
        //     <div className="relative z-10">
        //         <NavBar />

        //     </div>
            
        //     <div className="items-center relative z-10 flex flex-col justify-center h-full text-white text-center head-fade">
        //         <p className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]">Welcome</p>
        //         <h1 className="text-[1.75rem] md:text-[3.125rem] lg:text-[4rem] text-[#F5F1E3]">Cleaning Nairobi. Restoring Dignity. <br></br>Inspiring Change.</h1>
        //         <button className="discover-button">Discover</button>
        //     </div>

        // </div>
        // </SectionTransition>
        <SectionTransition bgColor="#184E35">
  <div className="relative h-[70vh] lg:h-screen w-full overflow-hidden">
    
    {/* 🔥 Background image layer with zoom animation */}
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-zoom-in"
      style={{ backgroundImage: `url(${heroImage})`, zIndex: 0 }}
    ></div>

    {/* Overlay on top of image */}
    <div className="absolute inset-0 bg-black/50 z-10" />

    {/* Navbar and content */}
    <div className="relative z-20">
      <NavBar />
    </div>

    <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
      <p className="font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]">Welcome</p>
      <h1 className="text-[1.75rem] md:text-[3.125rem] lg:text-[4rem] text-[#F5F1E3]">
        Cleaning Nairobi. Restoring Dignity. <br /> Inspiring Change.
      </h1>
      <button className="discover-button mt-4" onClick={() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}>
        Discover
      </button> 
    </div>
  </div>
</SectionTransition>

    );
}

export default HeroSection;