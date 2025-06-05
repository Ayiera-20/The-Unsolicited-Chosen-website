import garbageCollection from "../../assets/images/collectingGarbage.jpg"
import savePlanet from "../../assets/images/savePlanet.jpg"

const AboutSection = () => {

    return (
        <div className=" w-full flex bg-[#F5FAF6] gap-12 justify-center px-20 py-30">
            <div className="bg-white w-78 h-100 relative bg-cover bg-center bg-no-repeat mt-50"
            style={{backgroundImage: `url(${garbageCollection})`}}>
            </div>
            <div className="w-78 h-100 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${savePlanet})`}}
            >

            </div>
            <div>
                <h2 className="md:text-[50px] mb-10 mt-15 text-[#184E35]">More about Us</h2>
                <p className="text-lg w-120 mb-10 text-[#384B38]">The Unsolicited Chosen is a Nairobi-based faith-inspired community initiative focused on environmental restoration, waste management, and public education. 
                    We believe that a clean environment is everyone’s right and everyone’s responsibility.
                </p>
                <button className="btn-primary">Learn More</button>
            </div>

        </div>
    )
}
export default AboutSection;