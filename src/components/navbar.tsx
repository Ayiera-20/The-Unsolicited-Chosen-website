
import { Link } from 'react-router-dom';
import DrawerMenu from "./drawer";
import logo from "../assets/images/_logo.jpeg"

export default function NavBar() {
 
    return (
        <div className="hover:bg-[#184E35] whitespace-nowrap">
             <div className="flex lg:justify-between lg:gap-8 lg:py-8">
                <div className="flex items-center gap-x-6">
                  <DrawerMenu />
                </div>
                <div className='hidden lg:flex gap-4 -ml-10'>
                  <img className='h-14 w-14 object-cover rounded-full' src={logo} alt="logo" />
                  <p className='text-xl logo-text text-[#F5F1E3] font-bold'>THE UNSOLICITED <br></br> CHOSEN</p>
                </div>
                 
                <nav>
                    <ul className="flex-row hidden lg:flex gap-12 md:text-lg lg:text-xl text-white font-medium">
                        <Link to="/" className="hover:text-[#818F39] active:text-[#818F39]">Home</Link>
                        <Link to="/about" className="hover:text-[#818F39] active:text-[#818F39]">About</Link>
                        <Link to="/whatwedo" className="hover:text-[#818F39] active:text-[#818F39]">What we do</Link>
                        <Link to="/getinvolved" className="hover:text-[#818F39] active:text-[#818F39]">Get Involved</Link>
                        <Link to="/projects" className="hover:text-[#818F39] active:text-[#818F39]">Projects</Link>
              
                    </ul>
                </nav>
                <div className="gap-x-4  hidden lg:flex pr-10">
                  <Link to= "/donate">
                  <button className="py-2.5 px-6 rounded-full border-2 border-[#A3B18A] text-white hover:bg-[#A3B18A] hover:text-black">Donate Now</button>
                  </Link>
              
                
                  <Link to="/contact">
                  <button className="py-2.5 px-6 rounded-full bg-[#818F39] text-white border-transparent hover:bg-transparent hover:text-white border-2 hover:border-[#818F39]" >Contact Us</button>
                  </Link>
                
                </div>
            
          </div>
        </div>
    )
}