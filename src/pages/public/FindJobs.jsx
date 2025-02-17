import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Card from '../../components/findJob/Card/Card';
import JobSearchSection from '../../components/findJob/JobSearchSection/JobSearchSection';
import useScrollToTop from '../../hooks/useScrollToTop';
import { Helmet } from 'react-helmet-async';

const FindJobs = () => {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosPublic.get('/jobs-by-pagination', {
                    params: {
                        page: currentPage,
                        limit: 10, // You can make this dynamic if needed
                        search: searchQuery, // Pass the search query
                    },
                });

                setJobs(response.data.data);
                setTotalPages(response.data.pagination.totalPages);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchJobs();
    }, [currentPage, searchQuery]); // Refetch when the page or search query changes

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            window.scrollTo(0, 0);
            setCurrentPage(newPage);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query); // Update the search query
        setCurrentPage(1); // Reset to the first page when searching
    };

    return (
        <div className='w-11/12 max-w-screen-2xl mx-auto'>
            <Helmet>
                <title>Find Jobs | Job Box</title>
            </Helmet>
            <div className='mt-4'>
                <JobSearchSection jobs={jobs} onSearch={handleSearch} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16'>
                {jobs.map((job, idx) => (
                    <Card key={idx} job={job} />
                ))}
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
                                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                                    pageNumber === currentPage
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