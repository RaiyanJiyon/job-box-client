import { PiMapPinLight } from "react-icons/pi";

const JobInformation = ({ job }) => {
    return (
        <div className='border border-gray-300 rounded-lg px-4 md:px-4 pt-6 pb-10 hover:bg-gray-100'>
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
    );
};

export default JobInformation;