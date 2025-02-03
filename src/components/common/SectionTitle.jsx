import React from 'react';

const SectionTitle = ({title, description}) => {
    return (
        <div className='text-center space-y-3'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p className='text-gray-700 font-medium'>{description}</p>
        </div>
    );
};

export default SectionTitle;