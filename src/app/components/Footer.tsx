// components/Footer.tsx

import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-[780px] m-auto">
      {/* Newsletter Section */}
      <div className="mb-8 flex justify-between items-center">
        <div className='md:w-[40%]'>
        <h2 className="text-xl font-bold mb-4">Subscribe to Newsletter</h2>
        <p className='text-[16px] text-black'>Provide your email to get email notification when we
        launch new products or publish new articles</p>
        </div>
        <form className="flex md:w-[60%]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow p-2 rounded-l-lg border-solid border-blackalpha border-[1px]  focus:outline-none "
          />
          <button className="bg-customblue ml-[20px] text-white p-2 rounded-r-lg hover:bg-purple-700 transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className='text-[14px]'>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Free Website Templates</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Landing Page Templates</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Next.js Website Templates</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">TailwindCSS Components</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className='text-[14px]'>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">All Access Pass</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Blog & Articles</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Discord Chat</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Email Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className='text-[14px]'>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Documentation</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Help & Support</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Contact us</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Follow us on Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className='text-[14px]'>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Terms of Service</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">Refund Policy</a></li>
            <li className='py-2 text-zinc-600'><a href="#" className="hover:underline">License</a></li>
          </ul>
        </div>
      </div>

      {/* Chat Icon */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-customblue text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
        aria-label="Chat"
      >
        <FiMessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
