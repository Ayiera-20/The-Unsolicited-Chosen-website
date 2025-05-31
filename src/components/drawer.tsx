import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiListBold } from "react-icons/pi"; 

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
        <PiListBold size={20} className="md:w-9 md:h-9 text-white" />
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-[#F5FAF6] shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-2xl hover:bg-[#afdfaa] active:bg-[#afdfaa]"
          >
            <IoClose />
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-10 text-lg">
          {["Home", "About", "What we do", "Projects", "Get invloved"].map(
            (item) => (
              <li
                key={item}
                className="block p-2 hover:bg-[#afdfaa] active:bg-[#afdfaa] rounded-md transition-colors duration-150"
              >
                <a href="#" onClick={handleClose}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <div className="flex flex-col gap-2 mt-10 text-lg">
          <p className="hover:bg-[#afdfaa] block p-2 rounded-md">Donate Now</p>
          <p className="hover:bg-[#afdfaa] block p-2 rounded-md">Contact Us</p>
        </div>
        
      </div>
    </>
  );
};

export default DrawerMenu;
