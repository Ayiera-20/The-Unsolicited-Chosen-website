import garbageCollection from "../../assets/images/collectingGarbage.jpg"
import savePlanet from "../../assets/images/savePlanet.jpg"

const AboutSection = () => {

    return (
        <div className=" w-full flex flex-col md:flex-row bg-[#F5FAF6] md:gap-12 gap-0 justify-center items-center md:px-20 md:py-30 p-15">
            <div className="bg-white w-78 h-100 relative bg-cover bg-center bg-no-repeat mt-50 lg:block hidden"
            style={{backgroundImage: `url(${garbageCollection})`}}>
            </div>
            <div className="md:w-78 md:h-100 w-70 h-80 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${savePlanet})`}}
            >

            </div>
            <div>
                <h2 className="lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] mb-10 mt-15 text-[#184E35]">More about Us</h2>
                <p className="lg:text-lg  md:text-base text-sm md:w-100 lg:w-100 w-auto mb-10 text-[#384B38]">The Unsolicited Chosen is a Nairobi-based faith-inspired community initiative focused on environmental restoration, waste management, and public education. 
                    We believe that a clean environment is everyone’s right and everyone’s responsibility.
                </p>
                <button className="btn-primary">Learn More</button>
            </div>

        </div>
    )
}
export default AboutSection;