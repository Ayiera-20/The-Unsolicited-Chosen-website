import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
// @ts-expect-error Vite transforms query-string image imports at build time
import bgImage from "../assets/images/nature.jpg?w=1920"
import { Link } from 'react-router-dom';
import logo from '../assets/images/Unsolo2b (1).jpg'


const Footer = () =>{
    return (
        <div className="relative w-full bg-cover bg-center bg-no-repeat text-[#f5f1e3] md:px-20 px-10 lg:pt-15 py-10"
        style={{backgroundImage: `url(${bgImage})`}}>
            <div className="absolute inset-0 bg-[#184E35]/90"></div>
            <div className='relative z-10 flex flex-wrap lg:flex-nowrap gap-y-8 gap-x-6 lg:gap-x-8'>
                <div className='flex flex-col w-full lg:flex-1 lg:text-lg md:text-base text-sm items-center text-center lg:text-left justify-center lg:justify-items-start lg:items-start'>
                    <img className='h-30 w-30 mb-4 object-cover object-center' src={logo} alt="The Unsolicited Chosen logo" loading="lazy" decoding="async" />
                    <p>The Unsolicited Chosen</p>
                    <p>Nairobi, Kenya</p>
                    <div className=' flex flex-col'>
                        <p className='text-lg font-semibold mt-6'>Follow us</p>
                        <div className="gap-4 flex flex-row relative pt-8 items-center justify-center lg:justify-items-start lg:items-start">
                            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, SiTiktok].map((Icon, index) => (
                                <a
                                key={index}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#184E35] rounded-full p-3 shadow-md hover:bg-[#A3B18A] transition duration-300"
                                >
                                <Icon className="md:text-xl text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-1/2 md:w-1/3 lg:flex-1 flex flex-col gap-4 lg:text-lg md:text-base text-sm whitespace-nowrap'>
                    <p className='sub-sub-headings lg:text-xl md:text-lg text-[1rem] font-semibold'>Navigation</p>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/">Home</Link>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/about">About Us</Link>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/whatwedo">What we do</Link>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/getinvolved">Get involved</Link>
                </div>
                 <div className='w-1/2 md:w-1/3 lg:flex-1 flex flex-col gap-4 lg:text-lg md:text-base text-sm whitespace-nowrap'>
                    <p className='sub-sub-headings lg:text-xl md:text-lg text-[1rem] font-semibold'>Quick Links</p>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/donate">Donate</Link>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/affordablewaste">Affordable waste</Link>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/contact">Partner with us</Link>
                    <Link className='hover:text-[#818F39] transition duration-300' to="/contact">Request a cleanup</Link>
                </div>
                      <div className='w-full sm:w-1/2 md:w-1/3 lg:flex-1 flex flex-col gap-4 lg:text-lg md:text-base text-sm'>
                    <p className='sub-sub-headings lg:text-xl md:text-lg text-[1rem] font-semibold '>Explore</p>
                          <Link className='hover:text-[#818F39] transition duration-300 whitespace-nowrap' to="/whatwedo">Community education</Link>
                          <Link className='hover:text-[#818F39] transition duration-300 whitespace-nowrap' to="/getinvolved">Volunteer cleanups</Link>
                          <Link className='hover:text-[#818F39] transition duration-300 whitespace-nowrap' to="/contact">Strategic partnerships</Link>
                          <Link className='hover:text-[#818F39] transition duration-300 whitespace-nowrap' to="/about">Our story</Link>
                </div>
                <div className='w-1/2 md:w-1/3 lg:flex-1 flex flex-col mb-24 gap-4 lg:text-lg md:text-base text-sm'>
                </div>
                <div className='w-full md:w-1/3 lg:flex-1 flex flex-col gap-4 lg:text-lg md:text-base text-sm'>
                    <p className='sub-sub-headings lg:text-xl md:text-lg text-[1rem] font-semibold'>Information</p>
                    <a className='hover:text-[#818F39] transition duration-300' href="tel:+254757802807">+254 757 802 807</a>
                    <a className='hover:text-[#818F39] transition duration-300' href="mailto:theunsolicitedchosen@gmail.com">theunsolicitedchosen@gmail.com</a>
                    <a className='hover:text-[#818F39] transition duration-300' href="mailto:theunsolicitedchosen@outlook.com">theunsolicitedchosen@outlook.com</a>
                    <Link to ="/contact">
                    <button className="lg:text-lg md:text-base text-sm  md:mt-10 mt-2 md:py-4 md:px-8 px-4 py-2 rounded-full  text-white border-transparent
                     hover:bg-transparent border-2 hover:border-[#A3B18A] hover:text-[#A3B18A] transition duration-300 bg-[#818F39] font-bold" >Contact Us
                     </button>
                    </Link>
                    
                </div>

            
            

            </div>
            <div className='relative z-10 px-10'>
                <div className='w-full h-px bg-[#818F39] mt-15 mb-6'></div>
                <p className='text-center md:text-sm text-xs text-[#f4eddd]'>© The Unsolicited Chosen. All rights reserved. Licensing.</p>
            </div>
            
        </div>
    )
}
export default Footer;