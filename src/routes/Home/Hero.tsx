import heroJpg from "../../assets/images/hero.jpg"
// @ts-expect-error Vite transforms query-string image imports at build time
import heroJpgSrcSet from "../../assets/images/hero.jpg?w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
// @ts-expect-error Vite transforms query-string image imports at build time
import heroWebpSrcSet from "../../assets/images/hero.jpg?format=webp&w=640&w=960&w=1280&w=1600&w=1920&as=srcset"
import SectionTransition from "../../components/transition";



const HeroSection = () => {
    return(
    <SectionTransition bgColor="#184E35">
      <div className="relative h-[70vh] lg:h-screen w-full overflow-hidden">

      <picture className="absolute top-0 left-0 z-0 h-full w-full">
        <source type="image/webp" srcSet={heroWebpSrcSet} sizes="100vw" />
        <img
          className="h-full w-full object-cover object-center animate-zoom-in"
          src={heroJpg}
          srcSet={heroJpgSrcSet}
          sizes="100vw"
          alt=""
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />
      </picture>


      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

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