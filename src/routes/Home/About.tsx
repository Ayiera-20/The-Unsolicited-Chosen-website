import garbageCollection from "../../assets/images/collectingGarbage.jpg"
import savePlanet from "../../assets/images/savePlanet.jpg"
import { Link } from "react-router-dom";
import AnimatedText from "../../components/AnimatedText";
import ScrollRevealImage from "../../components/ScrollRevealImage";


const AboutSection = () => {

    return (
        <div id="about" className="w-full flex flex-col md:flex-row bg-[#F5FAF6] md:gap-12 gap-0 justify-center items-center md:px-20 md:py-30 p-15 ">
            <ScrollRevealImage>
                <div className="bg-white w-78 h-100 relative bg-cover bg-center bg-no-repeat mt-50 lg:block hidden animate-zoom-out slide-flip"
            style={{backgroundImage: `url(${garbageCollection})`}}>
            </div>
            </ScrollRevealImage>
            
            <ScrollRevealImage>
            <div className="md:w-78 md:h-100 w-70 h-80 bg-cover bg-center bg-no-repeat animate-zoom-out"
            style={{backgroundImage: `url(${savePlanet})`}}
            >
            </div>
            </ScrollRevealImage>

            <div>
                
                <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] mb-10 mt-15 text-[#184E35] slide">More about Us</h2>
                <AnimatedText>
                    <p className="lg:text-lg  md:text-base text-sm md:w-100 lg:w-100 w-auto mb-10 text-[#384B38]">The Unsolicited Chosen is a Nairobi-based faith-inspired community initiative focused on environmental restoration, waste management, and public education. 
                        We believe that a clean environment is everyone’s right and everyone’s responsibility.
                    </p>
                </AnimatedText>

                <Link to="/about">
                <button className="btn-primary transition-transform duration-[1000ms] hover:scale-110">Learn More</button>
                </Link>
                
            </div>

        </div>
    )
}
export default AboutSection;