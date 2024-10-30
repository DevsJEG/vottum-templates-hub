// components/Card.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  token: string | null;
}

const Card: React.FC<CardProps> = ({ image, title, description, token }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 h-auto]">
      <Image src={image} alt={title} className="w-full h-48 object-cover h-[350px]" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-[16px]">{description}</p>
        <p className="mt-4 text-link text-[14px]">{token}</p>
      </div>
    </div>
  );
};

export default Card;
