import cleaningImage from "../../assets/images/freepik__an-african-community-actively-cleaning-up-a-very-d__85931.png"
import { FaEye, FaTrash, FaSeedling, FaPrayingHands, FaHandsHelping, FaHeart } from 'react-icons/fa';


const items = [
    {title: "We saw the need, not the noise", icon:<FaEye className="text-3xl text-white mb-2" />},
    {title: "Environmental neglect affects dignity", icon: <FaTrash className="text-3xl text-white mb-2" />},
    {title: "We believe in grassroots change", icon: <FaSeedling className="text-3xl text-white mb-2" />},
    {title: "Faith drives our mission", icon: <FaPrayingHands className="text-3xl text-white mb-2" />},
    {title: "We value action over applause", icon:<FaHandsHelping className="text-3xl text-white mb-2" />},
    {title: "Our mission is personal",icon:<FaHeart className=" mb-2" />},
    

]

const WhyUnsolicited = () =>{
    return (
        <div className="relative lg:h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-white items-center text-center flex flex-col" 
        style={{backgroundImage: `url(${cleaningImage})`}}>
             <div className="absolute inset-0 bg-black/50"></div>
             <h2 className="relative text-[#F5F1E3] lg:text-[3.125rem] md:text-[2.5rem] text-[2rem] md:py-20 py-15">Why the Unsolicited Chosen</h2>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-12 md:mx-0 gap-6 mx-4 lg:pb-0 pb-15">
                {items.map((item, index) => (
                        <div key={index} className=" text-center md:gap-4 gap-2  backdrop-blur-lg md:p-6 p-4 flex flex-col justify-center rounded-b-lg">
                             <div className="flex justify-center items-center md:mb-3 text-3xl text-white">
                                {item.icon}
                            </div>
                            <p className="lg:text-lg  md:text-base text-sm sub-sub-headings">{item.title}</p>

                        </div>
                    ))}


            </div>

        </div>
    )
}


export default WhyUnsolicited;
