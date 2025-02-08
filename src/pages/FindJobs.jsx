import React from 'react';
import JobSearchSection from '../components/findJob/JobSearchSection/JobSearchSection';

const findJobs = () => {
    return (
        <div className='w-11/12 max-w-screen-2xl mx-auto'>
            <div className='mt-4'>
                <JobSearchSection />
            </div>
        </div>
    );
};

export default findJobs;