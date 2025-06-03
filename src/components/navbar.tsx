
import { Link } from 'react-router-dom';
import DrawerMenu from "./drawer";

export default function NavBar() {
 
    return (
        <div className="md:px-0 px-12 py-4 hover:bg-[#546a45]">
             <div className="flex justify-between items-center lg:px-20">
            <div className="flex items-center gap-x-6">
               <DrawerMenu />
            </div>
            <nav>
                <ul className="flex-row justify-between hidden lg:flex gap-14 text-[20px] text-white font-medium">
                    <Link to="/" className=" hover:text-black hover:border-[#afdfaa] hover:bg-[#afdfaa] hover:border-2 active:bg-[#afdfaa] hover:px-3.5 hover:py-1 hover:rounded-lg">Home</Link>
                     <Link to="/about" className="hover:text-black hover:border-[#799434] hover:bg-[#afdfaa] hover:border-1 active:bg-[#afdfaa] hover:px-3.5 hover:py-1 hover:rounded-lg">About</Link>
                     <Link to="/whatwedo" className="">What we do</Link>
                     <Link to="/getinvolved" className="">Get Involved</Link>
                    <li>Projects</li>
          
                </ul>
            </nav>
            <div className="gap-x-4  hidden lg:flex ">
           
              <button className="py-4 px-8 rounded-full border-2 border-[#afdfaa] text-white hover:bg-[#afdfaa] hover:text-black">Donate Now</button>
              <Link to="/contact">
               <button className="py-4 px-8 rounded-full bg-[#afdfaa] text-black border-transparent hover:bg-transparent hover:text-white hover:border-2 hover:border-[#afdfaa]" >Contact Us</button>
              </Link>
             
            </div>
            
          </div>
        </div>
    )
}