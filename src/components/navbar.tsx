
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
                    <Link to="/" className="">Home</Link>
                     <Link to="/about" className="">About</Link>
                     <Link to="/whatwedo" className="">What we do</Link>
                     <Link to="/getinvolved" className="">Get Involved</Link>
                    <li>Projects</li>
          
                </ul>
            </nav>
            <div className="gap-x-4  hidden lg:flex ">
           
              <button className="py-4 px-8 rounded-full border-2 border-[#afdfaa] text-white hover:bg-[#afdfaa] hover:text-black">Donate Now</button>
              <button className="py-4 px-8 rounded-full bg-[#afdfaa] text-black border-transparent hover:bg-transparent hover:text-white hover:border-2 hover:border-[#afdfaa]" >Contact Us</button>
            </div>
            
          </div>
        </div>
    )
}