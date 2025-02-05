import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { LuClock8 } from 'react-icons/lu';
import { PiMapPinLight } from 'react-icons/pi';

const JobCard = ({ job }) => {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all w-full">
            {/* Job Title */}
            <h3 className="text-lg font-bold text-gray-900">
                {job.position}
            </h3>
            <p className="text-sm text-gray-600">Remote</p>

            {/* Job Info */}
            <div className="flex items-center text-gray-500 text-sm mt-2">
                <LuClock8 className="mr-1" />
                <span>{job.posted_time}</span>
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

            {/* Company Info */}
            <div className="flex items-center">
                <img className="w-10 h-10 rounded-full" src={job.logo} alt={`${job.company} logo`} />
                <div className="ml-3">
                    <p className="text-md font-bold text-gray-900">{job.company}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                        <PiMapPinLight className="mr-1" /> {job.location}
                    </p>
                </div>
            </div>

            {/* Salary & Apply Button */}
            <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold text-blue-700">{job.salary}</p>
            </div>
        </div>
    );
}

export default JobCard;
