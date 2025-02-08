import React, { useEffect, useState } from 'react';
import JobSearchSection from '../components/findJob/JobSearchSection/JobSearchSection';
import Card from '../components/findJob/Card/Card';

const findJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/job.json');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className='w-11/12 max-w-screen-2xl mx-auto'>
            <div className='mt-4'>
                <JobSearchSection />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16'>
                {
                    jobs.map((job, idx) => (
                        <Card key={idx} job={job} />
                    ))
                }
            </div>
        </div>
    );
};

export default findJobs;
