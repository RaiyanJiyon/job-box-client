import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';
import { LuClock8 } from 'react-icons/lu';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';

const JobCard = ({ job }) => {
    return (
        <div className="block p-6 bg-[#f8faff] border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100">
                <span className='flex justify-end'>
                <HiLightningBolt className='text-green-600 text-xl' />
                </span>
            <div className='flex items-center mb-4'>
                <div className='flex-shrink-0 w-16 h-16'>
                    <img className='w-full h-full' src={job.logo} alt={`${job.position} logo`} />
                </div>
                <div className='ml-4'>
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">{job.company}</h5>
                    <p className="font-normal text-gray-700">{job.location}</p>
                </div>
            </div>

            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">{job.position}</h5>

            <div className='flex items-center gap-4 mt-3 mb-4'>
                <p className="flex items-center gap-1 font-normal text-gray-700 ">
                    <PiSuitcaseSimpleLight />
                    {job.type}
                </p>
                <p className="flex items-center gap-1 font-normal text-gray-700">
                    <LuClock8 />
                    {job.posted_time}
                </p>
            </div>

            <p className="sm:h-20 font-normal text-gray-700">{job.description}</p>

            <div className='flex flex-wrap sm:h-20 mt-4 sm:mt-0'>
                {job.skills.map((skill, index) => (
                    <button type="button" className="mr-2 my-2 px-3 py-1 text-xs font-medium text-gray-700 hover:text-black bg-[#e0e6f7] rounded-md hover:bg-blue-200">{skill}</button>
                ))}
            </div>

            <div className='flex justify-between items-center mt-4'>
                <p className="font-bold text-xl text-blue-700">{job.salary}</p>
                <a href={job.apply_link} className="text-blue-500 bg-[#e0e6f7] px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">Apply Now</a>
            </div>
        </div>
    );
};

export default JobCard;