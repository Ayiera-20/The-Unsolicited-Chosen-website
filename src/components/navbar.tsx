
import { Link } from 'react-router-dom';
import DrawerMenu from "./drawer";

export default function NavBar() {
 
    return (
        <div className="py-4 hover:bg-[#184E35] whitespace-nowrap">
             <div className="flex justify-between items-center lg:px-20">
            <div className="flex items-center gap-x-6">
               <DrawerMenu />
            </div>
            <nav>
                <ul className="flex-row hidden lg:flex gap-6 md:text-lg lg:text-xl text-white font-medium">
                    <Link to="/" className="hover:text-[#818F39] active:text-[#818F39] px-3.5 py-2">Home</Link>
                     <Link to="/about" className="hover:text-[#818F39] active:text-[#818F39] px-3.5 py-2">About</Link>
                     <Link to="/whatwedo" className="hover:text-[#818F39] active:text-[#818F39] px-3.5 py-2">What we do</Link>
                     <Link to="/getinvolved" className="hover:text-[#818F39] active:text-[#818F39] px-3.5 py-2">Get Involved</Link>
                    <Link to="/" className="hover:text-[#818F39] active:text-[#818F39] px-3.5 py-2">Projects</Link>
          
                </ul>
            </nav>
            <div className="gap-x-4  hidden lg:flex">
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