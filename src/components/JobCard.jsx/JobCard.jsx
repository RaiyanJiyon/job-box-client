import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { LuClock8 } from 'react-icons/lu';
import { PiMapPinLight, PiSuitcaseSimple } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <Link to={`/job-details/${job._id}`} className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:bg-gray-100 transition-all w-full">
            {/* Job Title */}
            <h3 className="text-lg font-bold text-gray-900">
                {job.position}
            </h3>

            <div className="flex items-center gap-8">
                {/* Job Info */}
                <div className="flex items-center text-gray-500 text-sm mt-2">
                    <PiSuitcaseSimple className="mr-1" />
                    <span>{job.workType}</span>
                </div>
                {/* Job Info */}
                <div className="flex items-center text-gray-500 text-sm mt-2">
                    <LuClock8 className="mr-1" />
                    <span>{formatDate(job.postedTime)}</span>
                </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-medium text-gray-600 bg-[#d8f1ff] rounded-md">
                        {skill}
                    </span>
                ))}
            </div>

            {/* Divider */}
            <hr className="my-4" />

            <div className="flex justify-between items-center">
                {/* Company Info */}
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src={job.logo} alt={`${job.company} logo`} />
                    <div className="ml-1">
                        <p className="text-md font-bold text-gray-900">{job.company}</p>
                        <p className="text-xs text-gray-500 flex items-center">
                            <PiMapPinLight className="mr-1" /> {job.location}
                        </p>
                    </div>
                </div>

                {/* Salary & Apply Button */}
                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-blue-700">${job.salary}<sub className='text-gray-500 font-normal'>/Hour</sub></p>
                </div>
            </div>

        </Link>
    );
}

export default JobCard;

// Utility function to format the date
function formatDate(dateTime) {
    const date = new Date(dateTime);
    const now = new Date();

    const timeDifference = now - date;
    const minute = 60 * 1000; // milliseconds in a minute
    const hour = 60 * minute; // milliseconds in an hour
    const day = 24 * hour; // milliseconds in a day

    // Check if the posted time is in the future
    if (timeDifference < 0) {
        return "Posted in the future";
    }

    if (timeDifference < hour) {
        const minutes = Math.floor(timeDifference / minute);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < day) {
        const hours = Math.floor(timeDifference / hour);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(timeDifference / day);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
}