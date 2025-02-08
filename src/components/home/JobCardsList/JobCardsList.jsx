import React, { useEffect, useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import JobCard from '../../JobCard.jsx/JobCard';

const JobCardsList = () => {
    const [jobs, setJobs] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Management');
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/job.json');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchJobs();
    }, []);

    // Filter jobs based on active category
    const filteredJobs =
        activeCategory === 'All'
            ? jobs
            : jobs.filter(job => job.category === activeCategory);
    
    const categories = [
        'Management',
        'Marketing & Sale',
        'Finance',
        'Human Resource',
        'Retail & Products',
        'Content Writer',
    ];
    
    const buttonImages = [
        'https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/management.svg',
        'https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/marketing.svg',
        'https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/finance.svg',
        'https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/human.svg',
        'https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/retail.svg',
        'https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/content.svg',
    ]

    return (
        <div>
            {/* Section Title */}
            <SectionTitle title="Jobs of the day" description="Search and connect with the right candidates faster." />

            {/* Button Container */}
            <div className='flex flex-wrap justify-evenly gap-4 max-w-screen-2xl w-4/5 mx-auto mt-6'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`flex items-center gap-1 border font-bold px-2 py-3 rounded-lg text-sm ${activeCategory === category
                                ? 'border-blue-600'
                                : 'border-gray-500 hover:border-blue-600'
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        <img
                            className='w-5'
                            src={buttonImages[index]}
                            alt=""
                        />
                        {category}
                    </button>
                ))}
            </div>

            {/* Job Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-4/5 max-w-screen-2xl mx-auto mt-14'>
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => <JobCard key={idx} job={job} />)
                ) : (
                    <p className="text-center col-span-full">No jobs available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default JobCardsList;
