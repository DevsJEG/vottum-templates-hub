// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center  p-4">
      <div className="logo bg-purple-600  text-white">
        <h1 className="text-lg font-bold">VTH</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
        <Link href="/templates" className="hover:underline">Templates</Link>
        <Link href="/pricing" className="hover:underline">Pricing</Link>
        <div className="relative">
          <button onClick={toggleDropdown} className="hover:underline">
            Resources
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              <Link href="/resources/resource1" className="block px-4 py-2 hover:bg-gray-200">Resource 1</Link>
              <Link href="/resources/resource2" className="block px-4 py-2 hover:bg-gray-200">Resource 2</Link>
              <Link href="/resources/resource3" className="block px-4 py-2 hover:bg-gray-200">Resource 3</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
