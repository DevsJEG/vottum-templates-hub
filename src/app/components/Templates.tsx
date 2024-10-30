// components/Gallery.tsx

import React from 'react';
import Card from './Card';
import { templates } from '@/services/templates';
const Templates: React.FC = () => {
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {templates.map((card, index) => (
        <Card
          key={index}
          image={card.img}
          title={card.title}
          description={card.description}
          token={card.token}
        />
      ))}
    </div>
  );
};

export default Templates;
