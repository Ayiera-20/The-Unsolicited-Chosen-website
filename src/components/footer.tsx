import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import bgImage from "../assets/images/nature.jpg"


const Footer = () =>{
    return (
        <div className="relative h-[70vh] w-full bg-cover bg-center bg-no-repeat text-white px-10 pt-10"
        style={{backgroundImage: `url(${bgImage})`}}>
            <div className="absolute inset-0 bg-[#384B38]/82"></div>
            <div className='relative z-10 grid grid-cols-4 items-center justify-center py-10 pr-16'>
                <div className='text-lg'>
                    <p>The Unsolicited Chosen</p>
                    <p>Nairobi, Kenya</p>
                </div>
                <div className='flex flex-col gap-2 text-lg font-semibold'>
                    <p className='sub-sub-headings text-[20px]'>Navigation</p>
                    <a className='' href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">What we do</a>
                    <a href="">Programs</a> 
                </div>
                <div className='flex flex-col gap-2 text-lg font-semibold'>
                    <p className='sub-sub-headings text-[20px]'>What-we-do</p>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">What we do</a>
                    <a href="">Programs</a> 
                </div>
                <div className='flex flex-col  gap-2 text-lg font-semibold'>
                    <p className='sub-sub-headings text-[20px]'>Information</p>
                    <a href="">+254 757 807</a>
                    <a href="">theunsolicitedchosen@gmail.com</a>
                    <a href="">theunsolicitedchosen@outlook.com</a>
                    <button className="mr-20 mt-6 py-4 px-8 rounded-full bg-[#afdfaa] text-black border-transparent
                     hover:bg-transparent hover:text-white hover:border-2 hover:border-[#afdfaa]" >Contact Us
                     </button>
                </div>

            <div className=' flex flex-col'>
                <p className='text-lg font-semibold'>Follow us</p>
                <div className="gap-4 flex flex-row relative py-6">
                    {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, SiTiktok].map((Icon, index) => (
                        <a
                        key={index}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-green-900 rounded-full p-3 shadow-md hover:bg-green-100 transition duration-300"
                        >
                        <Icon className="text-xl" />
                        </a>
                    ))}
                </div>
                
            </div>
            

            </div>
            <div className='relative z-10 px-10'>
                <div className='w-full h-px bg-[#afdfaa] my-4'></div>
                <p className='text-center text-[16px] text-[#f4eddd]'>© The Unsolicited Chosen. All rights reserved. Licensing.</p>
            </div>
            
        </div>
    )
}
export default Footer;