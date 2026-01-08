
import { Link } from 'react-router-dom';
import DrawerMenu from "./drawer";
import logo from "../assets/images/tclogo.png"
import { useState, useEffect } from 'react';

type NavBarProps = {
  forceSolidBg?: boolean;
};

export default function NavBar({ forceSolidBg = false }: NavBarProps) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY); // ✅ Update scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor =
    forceSolidBg || (scrollDirection === "up" && scrollY > 50)
      ? "bg-[#184E35]"
      : "bg-transparent";
 
    return (
        <div
      className={`
        fixed top-0 left-0 w-full z-[9999] pointer-events-auto
        transition-all duration-300 hover:bg-[#184E35]
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"} 
        ${bgColor}
      `}
    >
               <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-3 lg:gap-8 lg:py-3">
                 <div className="flex items-center gap-x-6">
                  <DrawerMenu />
                </div>
                <div className='hidden lg:flex -ml-10'>
                  <img className='h-20 w-20 object-cover rounded-full' src={logo} alt="logo" decoding="async" />
                  <p className='text-xl logo-text text-[#F5F1E3] font-bold'>THE UNSOLICITED <br></br> CHOSEN</p>
                </div>
                 
                <nav>
                    <ul className="flex-row hidden lg:flex gap-12 md:text-lg lg:text-xl text-white font-medium">
                        <Link to="/" className="hover:text-[#818F39] transition-transform duration-[1000ms] hover:scale-110 active:text-[#818F39]">Home</Link>
                        <Link to="/about" className="hover:text-[#818F39] transition-transform duration-[1000ms] hover:scale-110 active:text-[#818F39]">About</Link>
                        <Link to="/whatwedo" className="hover:text-[#818F39] transition-transform duration-[1000ms] hover:scale-110 active:text-[#818F39]">What we do</Link>
                        <Link to="/getinvolved" className="hover:text-[#818F39] transition-transform duration-[1000ms] hover:scale-110 active:text-[#818F39]">Get Involved</Link>
                        {/* <Link to="/" className="hover:text-[#818F39] transition-transform duration-[1000ms] hover:scale-110 active:text-[#818F39]">Projects</Link> */}
              
                    </ul>
                </nav>
                <div className="gap-x-4 hidden lg:flex pr-10">
                  <Link to= "/donate">
                  <button className="py-2.5 px-6 rounded-full border-2 border-[#A3B18A] text-white hover:bg-[#A3B18A] transition-transform duration-[1000ms] hover:scale-110 hover:text-black">Donate Now</button>
                  </Link>
              
                
                  <Link to="/contact">
                  <button className="py-2.5 px-6 rounded-full bg-[#818F39] text-white border-transparent hover:bg-transparent transition-transform duration-[1000ms] hover:scale-110 hover:text-white border-2 hover:border-[#818F39]" >Contact Us</button>
                  </Link>
                
                </div>
            
          </div>
        </div>
    )
}