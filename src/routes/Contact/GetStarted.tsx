import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import sgoals from "../../assets/images/sustainable-development-goals-still-life copy.jpg"

const GetStarted = ()  => {
    return(
        <div className="flex flex-col md:flex-row justify-center items-center px-20 lg:py-30 py-15 gap-15 text-bold">
            <img className='lg:w-120 md:w-80 h-auto' src={sgoals} alt="" />
           <div>
            <h2 className="lg:text-[2.5rem] text-[2rem] pb-6 text-bold text-[#184E35]">Let’s get started</h2>
            <p className="lg:text-lg  md:text-base text-sm max-w-120 pb-6">Ready to take the next step? Whether you’re looking to collaborate, learn more, or begin your journey with us, fill out the form down below and let’s connect.</p>
            <p className='lg:text-[1rem] md:text-sm text-xs text-[#82A718]'>Address</p>
            <p className='pb-6 lg:text-lg  md:text-base text-sm'>Nairobi, Kenya</p>
            <p className='lg:text-[1rem] md:text-sm text-xs text-[#82A718]'>Phone</p>
            <p className='pb-6 lg:text-lg  md:text-base text-sm'>+254 757 802 807</p>
            <p className='lg:text-[1rem] md:text-sm text-xs text-[#82A718]'>Email</p>
            <p className='lg:text-lg  md:text-base text-sm'>theunsolicitedchosen@gmail.com</p>
            <p className='lg:text-lg  md:text-base text-sm pb-6'>theunsolicitedchosen@outlook.com</p>
            <div className="gap-4 flex flex-row relative py-6">
                                            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, SiTiktok].map((Icon, index) => (
                                                <a
                                                key={index}
                                                href="#"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-[#184E35] p-3 shadow-md hover:bg-[#A3B18A] transition duration-300"
                                                >
                                                <Icon className="text-xl" />
                                                </a>
                                            ))}
                                        </div>
           </div>
            
             


        </div>
    )
}
export default GetStarted;