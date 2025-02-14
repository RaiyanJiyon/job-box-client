import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { LuClock8 } from 'react-icons/lu';
import { PiMapPinLight, PiSuitcaseSimple } from 'react-icons/pi';
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useLoaderData } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import FeaturedJobs from '../../components/JobDetails/FeaturedJobs/FeaturedJobs';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SimilarJobs from '../../components/JobDetails/SimilarJobs/SimilarJobs';
import { Helmet } from 'react-helmet-async';
import useCurrentUser from '../../hooks/useCurrentUser';
import useAuth from '../../hooks/useAuth';
import ErrorToaster from '../../components/common/Toaster/ErrorToaster';
import SuccessToaster from '../../components/common/Toaster/SuccessToaster';

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

// Reusable Employment Info Row
const EmploymentInfoRow = ({ iconSrc, label, value }) => (
    <div className='flex justify-between items-center w-full flex-wrap md:flex-nowrap'>
        <div className='flex items-center gap-2 min-w-[140px]'>
            <img src={iconSrc} alt={label} />
            <h4 className='text-gray-600 text-left whitespace-nowrap'>{label}</h4>
        </div>
        <h4 className='text-lg font-medium text-right w-full md:w-auto'>{value}</h4>
    </div>
);

const JobDetails = () => {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);
    const [similarJobs, setSimilarJobs] = useState([]);
    const axiosPublic = useAxiosPublic();
    const job = useLoaderData();
    const { category } = job;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const fetchSimilarJobs = async () => {
            try {
                const response = await axiosPublic.get('/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchSimilarJobs();
    }, []);

    useEffect(() => {
        if (jobs.length > 0 && category) {
            const filteredJobs = jobs.filter(similarJob => similarJob.category === category);
            setSimilarJobs(filteredJobs);
        }
    }, [jobs, category]);

    if (!job) return <div className="p-6 text-red-500">Job not found.</div>;

    // const updatedDate = new Date(job.updated).toISOString().split('T')[0];
    const deadlineDate = new Date(job.deadline).toISOString().split('T')[0];

    const handleSaveJobs = async (job) => {
        if (!currentUser) {
            ErrorToaster("User is not logged in. Please log in to save jobs.");
            return;
        }
    
        try {
            const userId = currentUser._id; // Get the current user's ID
            const jobId = job._id; // Extract the jobId from the job object
    
            const response = await axiosPublic.post("/saved-jobs", { userId, jobId });
    
            if (response.status === 201) {
                SuccessToaster("Job saved successfully.");
            } else {
                throw new Error("Failed to save job.");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // Handle duplicate job save attempt
                ErrorToaster("This job is already saved.");
            } else {
                console.error("Failed to save job. Please try again:", error.message);
                ErrorToaster("Failed to save job. Please try again.");
            }
        }
    };
    return (
        <div className='w-11/12 max-w-screen-2xl mx-auto mb-16 p-6'>
            <Helmet>
                <title>Job Details | Job Box</title>
            </Helmet>
            
            {/* Job Banner */}
            <img className='w-full rounded-2xl' src="https://i.ibb.co.com/TDm1ySpB/thumb.png" alt="Job Banner" />

            {/* Job Header */}
            <div className='flex flex-col md:flex-row justify-between my-10 gap-6'>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{job.position}</h2>
                    <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">
                        <div className="flex items-center">
                            <PiSuitcaseSimple className="mr-1 text-blue-500" />
                            <span>{job.employmentType}</span>
                        </div>
                        <div className="flex items-center">
                            <LuClock8 className="mr-1 text-blue-500" />
                            <span>{formatDate(job.postedTime)}</span>
                        </div>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-sm px-5 py-3 transition-all duration-300">
                    <RiCheckboxCircleLine />
                    Apply Now
                </button>
            </div>

            {/* Divider */}
            <div className='border border-b-gray-100 mb-12'></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className='grid col-span-2'>
                    {/* Employment Information */}
                    <div className='border border-gray-300 rounded-2xl px-4 md:px-10 pt-6 pb-10'>
                        <h3 className="text-2xl font-bold text-gray-800">Employment Information</h3>
                        <div className='border border-b-gray-100 my-3'></div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 gap-x-10'>
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/industry.svg" label="Industry" value={job.industry} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/job-level.svg" label="Job Level" value={job.jobLevel} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/salary.svg" label="Salary" value={`$${job.salary}`} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/experience.svg" label="Experience" value={job.experience} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/job-type.svg" label="Job Type" value={job.jobType} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/deadline.svg" label="Deadline" value={deadlineDate} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/updated.svg" label="Updated" value={'Not Updated'} />
                            <EmploymentInfoRow iconSrc="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/location.svg" label="Location" value={job.location} />
                        </div>
                    </div>

                    {/* Job Description */}
                    <div className='mt-10'>
                        <h2 className="text-3xl font-bold text-gray-800">Welcome to {job.company} Team</h2>
                        <p className='text-gray-500 my-6'>{job.company} team has a {job.vision}</p>

                        <h2 className="text-3xl font-bold text-gray-800">Essential Knowledge, Skills, and Experience</h2>
                        <ul className='text-gray-500 list-disc list-inside space-y-2 my-6'>
                            {job.essentialKnowledgeSkillsExperience.map((skill, idx) => <li key={idx}>{skill}</li>)}
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-800">Preferred Experience</h2>
                        <ul className='text-gray-500 list-disc list-inside space-y-2 my-6'>
                            {job.preferredExperience.map((exp, idx) => <li key={idx}>{exp}</li>)}
                        </ul>
                    </div>

                    {/* Company Name Divider */}
                    <div className="flex items-center gap-4 pt-4">
                        <div className="w-12 h-px bg-gray-600"></div>
                        <span className="text-xl font-medium text-gray-800">{job.company}</span>
                        <div className="w-12 h-px bg-gray-600"></div>
                    </div>


                    {/* Divider */}
                    <div className='border border-b-gray-100 mt-12'></div>

                    {/* share social media icons */}
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-6 mt-10'>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg">Apply Now</button>
                            <button onClick={() => handleSaveJobs(job)} className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">Save Job</button>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h3 className='text-gray-800 font-medium'>Share this</h3>
                            <div className="flex items-center gap-3">
                                <a href="https://www.facebook.com" className="bg-[#e7f1fd] rounded-full p-2"><FaFacebookF className='text-blue-600' /></a>
                                <a href="https://x.com" className="bg-[#e7f1fd] rounded-full p-2"><FaTwitter className='text-blue-600' /></a>
                                <a href="https://www.linkedin.com" className="bg-[#e7f1fd] rounded-full p-2"><FaLinkedinIn className='text-blue-600' /></a>
                                <a href="https://www.whatsapp.com" className="bg-[#e9faef] rounded-full p-2"><FaWhatsapp className='text-green-500' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-300 rounded-lg px-4 md:px-4 pt-6 pb-10'>
                        {/* Company Info */}
                        <div className="flex items-center gap-4">
                            <img className="w-14 h-14 p-2 rounded-md border" src={job.logo} alt={`${job.company} logo`} />
                            <div>
                                <p className="text-lg font-semibold text-gray-900">{job.company}</p>
                                <p className="text-sm text-gray-500 flex items-center">
                                    <PiMapPinLight className="mr-1 text-blue-500" /> {job.location}
                                </p>
                            </div>
                        </div>
                        {/* Divider */}
                        <div className='border border-b-gray-100 mt-6'></div>

                        <div>
                            <img className='w-full' src="https://i.ibb.co.com/1fc02LMn/maps-dmpu-1248.webp" alt="" />
                        </div>

                        <ul className='text-sm text-gray-500 list-disc list-inside space-y-2 mt-6'>
                            <li>Location: {job.location}</li>
                            <li>Phone: {job.phoneNumber}</li>
                            <li>Email: {job.email}</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <SimilarJobs jobs={similarJobs} />
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <FeaturedJobs />
            </div>
        </div>
    );
};

export default JobDetails;
