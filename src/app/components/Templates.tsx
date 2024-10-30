// components/Gallery.tsx

import React from 'react';
import Card from './Card';
import { templates } from '@/services/templates';
const Templates: React.FC = () => {


    return (
        <div className=" bg-gray ">
            <div className='m-auto max-w-[1100px] py-20'>
                <h4 className='pl-4'>Featured Templates</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 '>
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
                <div className='text-center'><a href=''>View All Templates</a></div>
            </div>
        </div>
    );
};

export default Templates;
