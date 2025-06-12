import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiListBold } from "react-icons/pi"; 
import { Link } from "react-router-dom";

interface DrawerMenu {
  className?: string;
}

const DrawerMenu = ({ className = "" }: DrawerMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className={`cursor-pointer lg:hidden ${className}`} onClick={handleToggle}>
        <PiListBold size={20} className="md:w-9 md:h-9 text-white  md:mx-8" />
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full md:w-1/2 w-3/4 bg-[#184E35] shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-2xl text-[#818F39]] hover:bg-[#A3B18A] active:bg-[#A3B18A]"
          >
            <IoClose className="text-white" />
          </button>
        </div>
         {/* Menu Links */}
        <ul className="flex flex-col gap-2 mt-10 text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "What we do", path: "/whatwedo" },
            { name: "Get involved", path: "/getinvolved" },
          ].map((item) => (
            <li
              key={item.name}
              className="block text-white p-2 hover:border-[#A3B18A] hover:bg-[#818F39] border border-transparent active:bg-[#A3B18] rounded-md transition-colors duration-150"
            >
              <Link to={item.path} onClick={handleClose}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-10 text-lg">
          <Link
            to="/donate"
            onClick={handleClose}
            className="bg-[#A3B18A] block p-2 hover:text-white hover:border-[#A3B18A] hover:bg-[#818F39] border border-transparent active:bg-[#A3B18] rounded-md transition-colors duration-150"
          >
            Donate Now
          </Link>
          <Link
            to="/contact"
            onClick={handleClose}
            className="bg-[#A3B18A] block p-2 hover:text-white hover:border-[#A3B18A] hover:bg-[#818F39] border border-transparent active:bg-[#A3B18] rounded-md transition-colors duration-150"
          >
            Contact Us
          </Link>
        
        </div>
        
      </div>
    </>
  );
};

export default DrawerMenu;
