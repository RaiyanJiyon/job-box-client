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

const EmployeeInformation = ({ job }) => {
    // const updatedDate = new Date(job.updated).toISOString().split('T')[0];
    const deadlineDate = new Date(job.deadline).toISOString().split('T')[0];
    return (
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
    );
};

export default EmployeeInformation;