import React, { useEffect, useState } from 'react';
import SectionTitle from '../../common/SectionTitle';

const TopRecruiters = () => {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        const fetchRecruiters = async () => {
            try {
                const response = await fetch('/recruiters.json');
                const data = await response.json();
                setRecruiters(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchRecruiters();
    }, []);

    return (
        <section>
            <SectionTitle title="Top Recruiters" description="Discover your next career move, freelance gig, or internship" />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-11/12 max-w-screen-2xl mx-auto mt-14'>
                {
                    recruiters.map((recruiter, idx) => (
                        <div key={idx} className="block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100">
                            <div className='flex items-center mb-4'>
                                <div className='flex-shrink-0 w-16 h-16'>
                                    <img className='w-full h-full' src={recruiter.companyLogo} alt={`${recruiter.companyName} logo`} />
                                </div>
                                <div className='ml-4'>
                                    <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">{recruiter.companyName}</h5>
                                    <div className='flex items-center'>
                                        <p className="font-normal text-yellow-500">{'★'.repeat(recruiter.rating)}</p>
                                        <p className="font-normal text-gray-700 ml-1">({recruiter.ratingCount})</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center text-gray-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8v13a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9 6 9-6M4 8h16" />
                                </svg>
                                <p>{recruiter.location}</p>
                            </div>
                            <div className='flex justify-end mt-2'>
                                <p className="font-normal text-gray-700">{recruiter.openJobs} Open Jobs</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default TopRecruiters;