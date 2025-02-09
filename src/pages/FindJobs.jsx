import React, { useEffect, useState } from 'react';
import JobSearchSection from '../components/findJob/JobSearchSection/JobSearchSection';
import Card from '../components/findJob/Card/Card';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useScrollToTop from '../hooks/useScrollToTop';

const findJobs = () => {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosPublic.get('/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchJobs();
    }, []);

    console.log(jobs)

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
