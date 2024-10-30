// components/Hero.tsx

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Website template with Vottun</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Vottun Templates Hub</h1>
      <p className="text-lg text-gray-600 mb-6">
        Launch your blockchain application in minutes. Web3-ready templates designed for seamless deployment.
        Built with Solidity, ERC standards, and React for instant compatibility and smooth integration with Vottun’s ecosystem.
      </p>
      <div className="space-x-4">
        <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition">
          Explore All Available Templates
        </button>
        <button className="flex items-center bg-white border border-purple-600 text-purple-600 font-semibold py-2 px-4 rounded hover:bg-purple-600 hover:text-white transition">
          Documentation
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
