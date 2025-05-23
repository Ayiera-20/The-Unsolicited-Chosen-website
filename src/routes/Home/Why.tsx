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
        <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat text-white items-center text-center flex flex-col" 
        style={{backgroundImage: `url(${cleaningImage})`}}>
             <div className="absolute inset-0 bg-black/50"></div>
             <h2 className="relative text-white lg:text-[50px] py-20">Why the Unsolicited Chosen</h2>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 space-y-10">
                {items.map((item, index) => (
                        <div key={index} className=" text-center gap-4  backdrop-blur-lg p-6 flex flex-col justify-center rounded-b-lg">
                             <div className="flex justify-center items-center mb-3 text-3xl text-white">
                                {item.icon}
                            </div>
                            <p className="text-[20px] sub-sub-headings">{item.title}</p>

                        </div>
                    ))}


            </div>

        </div>
    )
}


export default WhyUnsolicited;
