const JobDescription = ({job}) => {
    return (
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
    );
};

export default JobDescription;