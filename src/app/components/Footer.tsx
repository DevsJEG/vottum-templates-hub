// components/Footer.tsx

import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="">
      {/* Newsletter Section */}
      <div className="mb-8 flex">
        <div>
        <h2 className="text-xl font-bold mb-4">Subscribe to Newsletter</h2>
        <p>Provide your email to get email notification when we
        launch new products or publish new articles</p>
        </div>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-2 rounded-l-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button className="bg-purple-600 text-white p-2 rounded-r-lg hover:bg-purple-700 transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Group 1</h3>
          <ul>
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
            <li><a href="#" className="hover:underline">Link 4</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Group 2</h3>
          <ul>
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
            <li><a href="#" className="hover:underline">Link 4</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Group 3</h3>
          <ul>
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
            <li><a href="#" className="hover:underline">Link 4</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Group 4</h3>
          <ul>
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
            <li><a href="#" className="hover:underline">Link 4</a></li>
          </ul>
        </div>
      </div>

      {/* Chat Icon */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
        aria-label="Chat"
      >
        <FiMessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
