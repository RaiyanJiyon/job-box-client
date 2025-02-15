import React from 'react';
import { LuClock8 } from 'react-icons/lu';
import { PiMapPinLight, PiSuitcaseSimple } from 'react-icons/pi';

const SimilarJobs = ({ jobs }) => {
    if (!jobs || jobs.length === 0) {
        return <p className="text-gray-500 text-center py-4">No similar jobs found.</p>;
    }

    // Utility function to format the date
    const formatDate = (dateTime) => {
        const date = new Date(dateTime);
        const now = new Date();
        const diff = now - date;
        const minute = 60 * 1000, hour = 60 * minute, day = 24 * hour;

        if (diff < 0) return "Just now";
        if (diff < hour) return `${Math.floor(diff / minute)} min ago`;
        if (diff < day) return `${Math.floor(diff / hour)} hrs ago`;
        return `${Math.floor(diff / day)} days ago`;
    };

    return (
        <div className='border border-gray-300 rounded-xl p-6 bg-white hover:bg-gray-100'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Similar Jobs</h3>
            <div className=''>
                {jobs.map((job, idx) => (
                    <div key={idx}>

                        {/* Divider */}
                        <div className='border border-b-gray-100 my-6'></div>
                        <div className='border-b last:border-none pb-6 flex  gap-6 p-4 rounded-lg transition duration-300'>
                            {/* Company Logo */}
                            <img className="w-16 h-16 p-2 rounded-lg border shadow-sm" src={job.logo} alt={`${job.company} logo`} />

                            {/* Job Info */}
                            <div className='flex-1'>
                                <p className="text-lg font-semibold text-gray-900">{job.company}</p>
                                <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                                    <div className="flex items-center gap-1">
                                        <PiSuitcaseSimple className="text-blue-500" />
                                        <span>{job.employmentType}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <LuClock8 className="text-blue-500" />
                                        <span>{formatDate(job.postedTime)}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                                    <p className="text-lg font-medium text-blue-700">
                                        ${job.salary} <sub className="text-gray-500 font-normal">/Hour</sub>
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <PiMapPinLight className="text-blue-500" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarJobs;
