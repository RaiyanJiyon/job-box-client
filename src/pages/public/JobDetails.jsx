import React, { useEffect, useState, useRef } from 'react'; // Import useRef
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import FeaturedJobs from '../../components/JobDetails/FeaturedJobs/FeaturedJobs';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SimilarJobs from '../../components/JobDetails/SimilarJobs/SimilarJobs';
import { Helmet } from 'react-helmet-async';
import useCurrentUser from '../../hooks/useCurrentUser';
import ErrorToaster from '../../components/common/Toaster/ErrorToaster';
import SuccessToaster from '../../components/common/Toaster/SuccessToaster';
import JobHeader from '../../components/JobDetails/JobHeader/JobHeader';
import EmployeeInformation from '../../components/JobDetails/EmployeeInformation/EmployeeInformation';
import JobDescription from '../../components/JobDetails/JobDescription/JobDescription';
import JobInformation from '../../components/JobDetails/JobInformation/JobInformation';
import JobApplicationModal from '../../components/JobDetails/JobApplicationModal/JobApplicationModal';

const JobDetails = () => {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);
    const [similarJobs, setSimilarJobs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const axiosPublic = useAxiosPublic();
    const job = useLoaderData();
    const { category } = job;
    const { currentUser } = useCurrentUser();

    // Create a ref for the "Apply Now" button
    const applyButtonRef = useRef(null);

    useEffect(() => {
        const fetchSimilarJobs = async () => {
            try {
                const response = await axiosPublic.get('/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchSimilarJobs();
    }, []);

    useEffect(() => {
        if (jobs.length > 0 && category) {
            const filteredJobs = jobs.filter(similarJob => similarJob.category === category).slice(0, 3);
            setSimilarJobs(filteredJobs);
        }
    }, [jobs, category]);

    if (!job) return <div className="p-6 text-red-500">Job not found.</div>;

    const handleSaveJobs = async (job) => {
        if (!currentUser) {
            ErrorToaster("User is not logged in. Please log in to save jobs.");
            return;
        }
        try {
            const userId = currentUser._id; // Get the current user's ID
            const jobId = job._id; // Extract the jobId from the job object
            const jobCategory = job.category;
            const jobCompany = job.company;
            const jobLogo = job.logo;
            const jobLocation = job.location;
            const jobPosition = job.position;
            const response = await axiosPublic.post("/saved-jobs", { userId, jobId, jobCategory, jobCompany, jobLogo, jobLocation, jobPosition });
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
            <JobHeader job={job} onApplyClick={() => {
                const element = applyButtonRef.current;
                if (element) {
                    const offset = 100; // Adjust this value to account for fixed headers or padding
                    const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({
                        top: topPosition,
                        behavior: 'smooth'
                    });
                }
            }} />
            {/* Divider */}
            <div className='border border-b-gray-100 mb-12'></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className='lg:col-span-2 w-full'>
                    {/* Employment Information */}
                    <EmployeeInformation job={job} />
                    {/* Job Description */}
                    <JobDescription job={job} />
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
                            {/* Apply Now Button with ref */}
                            <button
                                ref={applyButtonRef} // Attach the ref here
                                onClick={() => {
                                    if (!currentUser) {
                                        ErrorToaster("User is not logged in. Please log in to apply jobs.");
                                    } else {
                                        setIsModalOpen(true); // Open modal if user is logged in
                                    }
                                }} // Check login status before opening modal
                                disabled={currentUser?.role === "admin" || currentUser?.role === "recruiter"} // Disable for admin or recruiter
                                className={`px-6 py-3 font-medium rounded-lg ${currentUser?.role === "admin" || currentUser?.role === "recruiter"
                                    ? "bg-gray-400 cursor-not-allowed" // Disabled style
                                    : "bg-blue-600 hover:bg-blue-700 text-white" // Enabled style
                                    }`}
                            >
                                Apply Now
                            </button>
                            <button
                                onClick={() => handleSaveJobs(job)}
                                disabled={currentUser?.role === "admin" || currentUser?.role === "recruiter"} // Disable for admin or recruiter
                                className={`px-6 py-3 border rounded-lg ${currentUser?.role === "admin" || currentUser?.role === "recruiter"
                                    ? "bg-gray-400 text-gray-500 border-gray-400 cursor-not-allowed" // Disabled style
                                    : "text-blue-600 border-blue-600 hover:bg-[#05264e] hover:text-white" // Enabled style
                                    }`}
                            >
                                Save Job
                            </button>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h3 className='text-gray-800 font-medium'>Share this</h3>
                            <div className="flex items-center gap-3">
                                <a href="https://www.facebook.com" target='_blank' className="bg-[#e7f1fd] rounded-full p-2"><FaFacebookF className='text-blue-600' /></a>
                                <a href="https://x.com" target='_blank' className="bg-[#e7f1fd] rounded-full p-2"><FaTwitter className='text-blue-600' /></a>
                                <a href="https://www.linkedin.com" target='_blank' className="bg-[#e7f1fd] rounded-full p-2"><FaLinkedinIn className='text-blue-600' /></a>
                                <a href="https://www.whatsapp.com" target='_blank' className="bg-[#e9faef] rounded-full p-2"><FaWhatsapp className='text-green-500' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* job information */}
                    <JobInformation job={job} />
                    {/* similar jobs */}
                    <div className='mt-10'>
                        <SimilarJobs jobs={similarJobs} />
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <FeaturedJobs />
            </div>
            {/* Render the Modal */}
            <div className=''>
                {isModalOpen && (
                    <JobApplicationModal
                        job={job}
                        onClose={() => setIsModalOpen(false)} // Close modal callback
                    />
                )}
            </div>
        </div>
    );
};
export default JobDetails;