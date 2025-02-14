import { LuClock8 } from "react-icons/lu";
import { PiSuitcaseSimple } from "react-icons/pi";
import { RiCheckboxCircleLine } from "react-icons/ri";

const JobHeader = ({ job }) => {
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
            <button onClick={() => handleApplyJobs(job)} className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-sm px-5 py-3 transition-all duration-300">
                <RiCheckboxCircleLine />
                Apply Now
            </button>
        </div>
    );
};

export default JobHeader;