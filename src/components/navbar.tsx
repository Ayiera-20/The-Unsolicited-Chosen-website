
import { Link } from 'react-router-dom';
import DrawerMenu from "./drawer";

export default function NavBar() {
 
    return (
        <div className="md:px-0 px-12 py-4 hover:bg-[#184E35]">
             <div className="flex justify-between items-center lg:px-20">
            <div className="flex items-center gap-x-6">
               <DrawerMenu />
            </div>
            <nav>
                <ul className="flex-row justify-between hidden lg:flex gap-14 text-[20px] text-white font-medium">
                    <Link to="/" className="hover:border-[#A3B18A] hover:bg-[#818F39] border-1 active:bg-[#A3B18] px-3.5 py-2 hover:rounded-md border-transparent">Home</Link>
                     <Link to="/about" className="hover:border-[#A3B18A] hover:bg-[#818F39] border-1 active:bg-[#A3B18] px-3.5 py-2 hover:rounded-md border-transparent">About</Link>
                     <Link to="/whatwedo" className="hover:border-[#A3B18A] hover:bg-[#818F39] border-1 active:bg-[#A3B18] px-3.5 py-2 hover:rounded-md border-transparent">What we do</Link>
                     <Link to="/getinvolved" className="hover:border-[#A3B18A] hover:bg-[#818F39] border-1 active:bg-[#A3B18] px-3.5 py-2 hover:rounded-md border-transparent">Get Involved</Link>
                    <Link to="/" className="hover:border-[#A3B18A] hover:bg-[#818F39] border-1 active:bg-[#A3B18] px-3.5 py-2 hover:rounded-md border-transparent">Projects</Link>
          
                </ul>
            </nav>
            <div className="gap-x-4  hidden lg:flex ">
              <Link to= "/donate">
               <button className="py-4 px-8 rounded-full border-2 border-[#A3B18A] text-white hover:bg-[#A3B18A] hover:text-black">Donate Now</button>
              </Link>
           
             
              <Link to="/contact">
               <button className="py-4 px-8 rounded-full bg-[#818F39] text-white border-transparent hover:bg-transparent hover:text-white border-2 hover:border-[#818F39]" >Contact Us</button>
              </Link>
             
            </div>
            
          </div>
        </div>
    )
}