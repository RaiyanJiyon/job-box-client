import React from 'react';
import CountUp from 'react-countup';

const statisticsData = [
    {
        end: 25,
        suffix: 'K+',
        title: 'Completed Cases',
        description: 'Providing comprehensive solutions tailored to your business needs.',
    },
    {
        end: 17,
        suffix: '+',
        title: 'Our Office',
        description: 'Expanding our reach with multiple offices across the globe.',
    },
    {
        end: 86,
        suffix: '+',
        title: 'Skilled People',
        description: 'Our team consists of highly skilled professionals dedicated to excellence.',
    },
    {
        end: 28,
        suffix: '+',
        title: 'Happy Clients',
        description: 'We take pride in our long list of satisfied clients.',
    },
];

const StatisticsSection = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 max-w-screen-2xl mx-auto">
            {statisticsData.map((item, index) => (
                <div key={index} className="text-center space-y-2">
                    <h2 className="text-6xl font-bold text-blue-600">
                        <CountUp end={item.end} duration={10} separator="," suffix={item.suffix} />
                    </h2>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </section>
    );
};

export default StatisticsSection;
