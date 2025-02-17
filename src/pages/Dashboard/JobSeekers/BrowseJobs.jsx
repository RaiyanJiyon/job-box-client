import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useScrollToTop from '../../../hooks/useScrollToTop';
import Card from '../../../components/findJob/Card/Card';
import { Helmet } from 'react-helmet-async';
import Loader from '../../../components/common/Loader/Loader';
import SectionTitle from '../../../components/common/SectionTitle';

const FindJobs = () => {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const response = await axiosPublic.get('/jobs-by-pagination', {
                    params: {
                        page: currentPage,
                        limit: 10, // You can make this dynamic if needed
                    },
                });

                if (response.data?.data) {
                    setJobs(response.data.data);
                }

                if (response.data?.pagination?.totalPages) {
                    setTotalPages(response.data.pagination.totalPages);
                }
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [currentPage, axiosPublic]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    };

    if (loading) {
        return <Loader />
    }

    return (
        <div className='p-6'>
            <Helmet>
                <title>Browse Jobs | Job Box</title>
            </Helmet>
            <SectionTitle
                title="Browse Jobs"
                description="Explore a variety of job opportunities and find the perfect match for your skills and career aspirations."
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mt-10 mb-6'>
                {
                    jobs.map((job, idx) => (
                        <Card key={idx} job={job} />
                    ))
                }
            </div>

            <nav className='flex justify-center mb-10' aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <li key={pageNumber}>
                            <button
                                onClick={() => handlePageChange(pageNumber)}
                                className={`flex items-center justify-center px-4 h-10 leading-tight ${pageNumber === currentPage
                                    ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default FindJobs;