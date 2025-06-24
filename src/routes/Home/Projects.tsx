import veg from "../../assets/images/hero.jpg"
import children from "../../assets/images/children.jpg"
import recyc from "../../assets/images/Intro-background.jpg"
import { Link } from "react-router-dom";
import AnimatedText from "../../components/AnimatedText";


const Projects = () =>{
    return (
        <div className="md:px-20 md:py-30 px-10 py-15">
            <div className="flex flex-row  gap-4 md:justify-between pb-8 md:justify-items-stretch justify-center items-center">
                <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] text-center text-[#184E35] slide">Our Projects</h2>
                <button className="btn-primary md:block hidden">Discover More →</button>
            </div>
            <p className="italic font-bold pb-12 text-[#184E35] lg:text-lg  md:text-base text-sm md:text-left text-center">Transforming our communities, one action at a time.</p>
            <AnimatedText>
                <p className="lg:text-lg  md:text-base text-sm md:w-120.5 w-auto pb-20 text-center md:text-left">From cleaning up public spaces to teaching sustainable waste practices and planting trees, our programmes are practical, people-powered, and built to scale.</p>
            </AnimatedText>
            
            
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min space-y-8 md:gap-4">
                <div className="space-y-4 w-full h-auto">
                    <img className="w-116.5 md:h-74.5 h-auto rounded-xl" src={veg} alt="" />
                    <p className="lg:text-lg  md:text-base text-sm font-bold">Community Cleanups</p>
                </div>
                <div className="flex flex-col space-y-4 w-full h-auto">
                    <img className="lg:w-159.5 lg:h-191.5 md:w-140 md:h-160 rounded-xl object-cover" src={recyc} alt="" />
                    <p className="lg:text-lg  md:text-base text-sm font-bold">Affordable Waste Solutions</p>
                </div>
                <div className="flex flex-col space-y-4 w-full h-auto lg:-mt-100">
                    <img className="w-116.5 md:h-74.5 h-auto rounded-xl" src={children} alt="" />
                    <p className="lg:text-lg  md:text-base text-sm font-bold">Faith & Hope</p>
                </div>
                
               
            </div>
            <Link to="/projects">
            <button className="btn-primary md:hidden max-w-50 mt-10">Discover More →</button>
            </Link>
            
        </div>
    )
}
export default Projects;