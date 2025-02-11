import React, { useState } from "react";

const PostJob = () => {
    const [jobData, setJobData] = useState({
        category: "",
        company: "",
        logo: "",
        location: "",
        position: "",
        employmentType: "",
        workType: "",
        postedTime: "",
        description: "",
        salary: "",
        skills: "",
        experience: "",
        jobType: "",
        deadline: "",
        phoneNumber: "",
        email: "",
        industry: "",
        jobLevel: "",
        vision: "",
        essentialKnowledgeSkillsExperience: "",
        preferredExperience: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(jobData);
    };

    return (
        <div className="border border-red-500 max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">Post a Job</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="category" placeholder="Category" value={jobData.category} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="text" name="company" placeholder="Company Name" value={jobData.company} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="text" name="position" placeholder="Position" value={jobData.position} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="text" name="employmentType" placeholder="Employment Type" value={jobData.employmentType} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="text" name="workType" placeholder="Work Type" value={jobData.workType} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="number" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="text" name="experience" placeholder="Experience" value={jobData.experience} onChange={handleChange} className="p-2 border rounded w-full" />
                </div>
                <textarea name="description" placeholder="Job Description" value={jobData.description} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
                <textarea name="skills" placeholder="Required Skills (comma separated)" value={jobData.skills} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="jobType" placeholder="Job Type" value={jobData.jobType} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="date" name="deadline" placeholder="Application Deadline" value={jobData.deadline} onChange={handleChange} className="p-2 border rounded w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="phoneNumber" placeholder="Contact Number" value={jobData.phoneNumber} onChange={handleChange} className="p-2 border rounded w-full" />
                    <input type="email" name="email" placeholder="Company Email" value={jobData.email} onChange={handleChange} className="p-2 border rounded w-full" />
                </div>
                <textarea name="vision" placeholder="Company Vision" value={jobData.vision} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
                <textarea name="essentialKnowledgeSkillsExperience" placeholder="Essential Skills & Experience" value={jobData.essentialKnowledgeSkillsExperience} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
                <textarea name="preferredExperience" placeholder="Preferred Experience" value={jobData.preferredExperience} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600">Submit Job</button>
            </form>
        </div>
    );
};

export default PostJob;
