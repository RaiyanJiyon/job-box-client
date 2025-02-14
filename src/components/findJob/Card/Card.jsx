import { LuClock8 } from "react-icons/lu";
import { PiMapPinLight, PiSuitcaseSimple } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ job }) => {
    const navigate = useNavigate();

    const handleApplyButton = id => {
        navigate(`/job-details/${id}`)
    }
    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg px-6 py-6 pb-4 hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100">
            {/* Company Info */}
            <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full border" src={job.logo} alt={`${job.company} logo`} />
                <div>
                    <p className="text-lg font-semibold text-gray-900">{job.company}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                        <PiMapPinLight className="mr-1 text-blue-500" /> {job.location}
                    </p>
                </div>
            </div>

            {/* Job Title */}
            <h2 className="text-xl font-bold text-gray-800 mt-4 h-16">{job.position}</h2>

            {/* Job Info */}
            <div className="flex items-center gap-6 mt-2 text-gray-500 text-sm">
                <div className="flex items-center">
                    <PiSuitcaseSimple className="mr-1 text-blue-500" />
                    <span>{job.employmentType}</span>
                </div>
                <div className="flex items-center">
                    <LuClock8 className="mr-1 text-blue-500" />
                    <span>{formatDate(job.postedTime)}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-3 line-clamp-2">{job.description}</p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 my-8">
                {job.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-blue-100 rounded-md"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Salary & Apply Button */}
            <div className="flex justify-between items-center mt-auto mb-4">
                <p className="text-lg font-bold text-blue-700">
                    ${job.salary}<sub className="text-gray-500 font-normal">/Hour</sub>
                </p>
                <Link to={`/job-details/${job._id}`}>
                    <button
                        type="button"
                        className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-sm px-5 py-2 transition-all duration-300"
                    >
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;

// Utility function to format the date
function formatDate(dateTime) {
    const date = new Date(dateTime);
    const now = new Date();

    const timeDifference = now - date;
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (timeDifference < 0) return "Just now";
    if (timeDifference < hour) return `${Math.floor(timeDifference / minute)} min ago`;
    if (timeDifference < day) return `${Math.floor(timeDifference / hour)} hrs ago`;

    return `${Math.floor(timeDifference / day)} days ago`;
}
