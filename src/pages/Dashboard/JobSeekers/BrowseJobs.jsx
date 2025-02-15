import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useScrollToTop from '../../../hooks/useScrollToTop';
import Card from '../../../components/findJob/Card/Card';
import { Helmet } from 'react-helmet-async';

const FindJobs = () => {
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

    return (
        <div>
            <Helmet>
                <title>Browse Jobs | Job Box</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Browse Jobs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 my-6'>
                {
                    jobs.map((job, idx) => (
                        <Card key={idx} job={job} />
                    ))
                }
            </div>
        </div>
    );
};

export default FindJobs;