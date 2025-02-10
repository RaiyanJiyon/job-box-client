import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Card from '../../findJob/Card/Card';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchFeaturedJobs = async () => {
            try {
                const response = await axiosPublic.get('/featured-jobs');
                setFeaturedJobs(response.data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchFeaturedJobs();
    }, []);

    return (
        <div>
        <div className='space-y-3'>
            <h2 className='text-4xl font-bold'>Featured Jobs</h2>
            <p className='text-gray-500 text-lg font-medium'>Get the latest news, updates and tips</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>

            {
                featuredJobs.map((featuredJob, idx) => (
                    <Card key={idx} job={featuredJob} />
                ))
            }
        </div>
    </div>
    );
};

export default FeaturedJobs;