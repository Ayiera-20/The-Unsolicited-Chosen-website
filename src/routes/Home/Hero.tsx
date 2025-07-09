import heroImage from "../../assets/images/hero.jpg"
import NavBar from "../../components/navbar";
import SectionTransition from "../../components/transition";



const HeroSection = () => {
    return(
    <SectionTransition bgColor="#184E35">
      <div className="relative h-[70vh] lg:h-screen w-full overflow-hidden">
    
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-zoom-in z-0"
        style={{ backgroundImage: `url(${heroImage})`}}
      ></div>


      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />


      <div className="relative z-20">
        <NavBar />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
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