import React from 'react';

const SectionTitle = ({title, description}) => {
    return (
        <div className='text-center space-y-3'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-gray-500 text-base font-medium'>{description}</p>
        </div>
    );
};

export default SectionTitle;