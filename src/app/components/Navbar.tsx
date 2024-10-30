// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center  p-4">
      <div className="logo bg-primarytext text-white bg-primarytext px-4 ">
        <h1 className="text-lg font-bold">VTH</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:underline text-link px-2">Login</Link>
        <Link href="/contact" className="hover:underline text-link px-2">Contact Us</Link>
        <Link href="/templates" className="hover:underline text-link px-2">Templates</Link>
        <Link href="/pricing" className="hover:underline text-link px-2">Pricing</Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="hover:underline text-link px-2 flex items-center">
            Resources <IoIosArrowDown/>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              <Link href="/resources/resource1" className="block px-4 py-2 hover:bg-gray-200">Resource 1</Link>
              <Link href="/resources/resource2" className="block px-4 py-2 hover:bg-gray-200">Resource 2</Link>
              <Link href="/resources/resource3" className="block px-4 py-2 hover:bg-gray-200">Resource 3</Link>
            </div>
          )}
        </div>
        <IoSunnyOutline />
      </div>
    </nav>
  );
};

export default Navbar;
