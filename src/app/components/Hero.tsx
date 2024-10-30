// components/Hero.tsx

import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
const Hero: React.FC = () => {
    return (
        <div className=" px-4">
            <div className='flex flex-col items-center justify-center text-center'>
                <h2 className="text-lg font-semibold text-gray-700 mb-4 px-2 bg-primaryalpha">Website template with Vottun</h2>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-[64px] ">Vottun Templates Hub</h1>
                <p className="text-lg text-secondarytext mb-6 max-w-[680px]">
                    Launch your blockchain application in minutes. Web3-ready templates designed for seamless deployment.
                    Built with Solidity, ERC standards, and React for instant compatibility and smooth integration with Vottun’s ecosystem.
                </p>
                <div className="space-x-4 flex">
                    <button className="bg-gradient-to-r from-customblue to-customdarkblue  text-white font-semibold py-3 px-4 rounded hover:bg-purple-700 transition">
                        Explore All Available Templates
                    </button>
                    <button className="bg-black flex items-center border border-purple-600 text-white font-semibold py-3 px-4 rounded hover:bg-customblue hover:text-white transition">
                        Documentation
                        <IoIosArrowForward className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
