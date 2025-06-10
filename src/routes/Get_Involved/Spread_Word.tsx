import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const SpreadWord = () =>{
    return (
        <div className="md:px-20 px-10 md:py-30 py-15 text-center flex flex-col justify-center items-center md:gap-12 gap-8">
            <h2 className="font-bold text-[#184E35] lg:text-[2rem] md:text-[1.75rem] text-2xl">Be a voice for cleaner, fairer neighborhoods.</h2>
            <p className='lg:text-lg  md:text-base text-sm'>Share our mission online, at church, or in your circles.</p>
            <p className='lg:text-xl md:text-[1.125rem] text-[1rem] font-bold '>One post can move a village. </p>
            <p className='lg:text-lg  md:text-base text-sm max-w-181.5'>Don't forget . donate today to support our mission and help bring this vision to life. Together, we can create lasting change.</p>
            <button className="btn-primary">Donate Today</button>
            <div className="gap-4 flex flex-row relative py-6">
                                {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, SiTiktok].map((Icon, index) => (
                                    <a
                                    key={index}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-[#184E35]  p-3 shadow-md hover:bg-[#A3B18A] transition duration-300"
                                    >
                                    <Icon className="md:text-xl text-lg" />
                                    </a>
                                ))}
                            </div>
        </div>
    )
}
export default SpreadWord;