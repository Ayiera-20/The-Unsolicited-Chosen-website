import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const SpreadWord = () =>{
    return (
        <div className="px-20 py-30 text-center flex flex-col justify-center items-center gap-12">
            <h2 className="font-bold text-black text-[32px]">Be a voice for cleaner, fairer neighborhoods.</h2>
            <p className='text-lg'>Share our mission online, at church, or in your circles.</p>
            <p className='text-xl font-bold text-black'>One post can move a village. </p>
            <p className='text-lg max-w-181.5'>Don't forget . donate today to support our mission and help bring this vision to life. Together, we can create lasting change.</p>
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
                                    <Icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
        </div>
    )
}
export default SpreadWord;