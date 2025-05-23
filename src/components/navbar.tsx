

import DrawerMenu from "./drawer";

export default function NavBar() {
 
    return (
        <div className="md:px-0 px-12 py-4">
             <div className="flex justify-between items-center lg:px-20">
            <div className="flex items-center gap-x-6">
               <DrawerMenu />
            </div>
            <div >
                <ul className="flex-row justify-between hidden lg:flex gap-14 text-[20px] text-white font-medium">
                    <li>Home</li>
                    <li>About</li>
                    <li>What we do</li>
                    <li>Projects</li>
                    <li>Get Involved</li>
                </ul>
            </div>
            <div className="gap-x-4  hidden lg:flex ">
           
              <button className="py-4 px-8 rounded-full border-2 border-[#afdfaa] text-white hover:bg-[#afdfaa] hover:text-black">Donate Now</button>
              <button className="py-4 px-8 rounded-full bg-[#afdfaa] text-black border-transparent hover:bg-transparent hover:text-white hover:border-2 hover:border-[#afdfaa]" >Contact Us</button>
            </div>
            
          </div>
        </div>
    )
}