import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-extrabold">Alisma</div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-10">
          <li className="hover:text-blue-500"><a href="#Hero">Home</a></li>
          <li className="hover:text-blue-500"><a href="#About">About</a></li>
          <li className="hover:text-blue-500"><a href="#Projects">Projects</a></li>
          <li className="hover:text-blue-500"><a href="#Skills">Skills</a></li>
          <li className="hover:text-blue-500"><a href="#Contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
          <li><a href="#Hero" onClick={toggleMenu} className="hover:text-blue-500">Home</a></li>
          <li><a href="#About" onClick={toggleMenu} className="hover:text-blue-500">About</a></li>
          <li><a href="#Projects" onClick={toggleMenu} className="hover:text-blue-500">Projects</a></li>
          <li><a href="#Skills" onClick={toggleMenu} className="hover:text-blue-500">Skills</a></li>
          <li><a href="#Contact" onClick={toggleMenu} className="hover:text-blue-500">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
