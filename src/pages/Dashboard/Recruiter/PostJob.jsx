import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/common/SectionTitle";

const PostJob = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            let logoUrl = null;

            if (data.logo && data.logo[0]) {
                const imgbbApiKey = "4f7db5cb8e27c23cd113273a96ce039c";
                const formData = new FormData();
                formData.append("image", data.logo[0]);

                // Upload the image to ImgBB
                const imgbbResponse = await fetch(
                    `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const imgbbData = await imgbbResponse.json();
                if (imgbbData.success) {
                    logoUrl = imgbbData.data.url;
                } else {
                    throw new Error("Failed to upload logo to ImgBB");
                }
            }

            // Validate and convert deadline to ISO string
            const deadlineDate = new Date(data.deadline);
            if (isNaN(deadlineDate.getTime())) {
                throw new Error("Invalid deadline date");
            }
            const isoDeadline = deadlineDate.toISOString();

            // Validate and convert postedTime to ISO string if needed
            const postedTimeDate = new Date(data.postedTime);
            if (isNaN(postedTimeDate.getTime())) {
                throw new Error("Invalid posted time date");
            }
            const isoPostedTime = postedTimeDate.toISOString();

            // Prepare the job data
            const jobData = {
                ...data,
                logo: logoUrl, // Store the ImgBB URL
                salary: Number(data.salary), // Convert salary to a number
                skills: data.skills ? data.skills.split(",").map(skill => skill.trim()) : [], // Convert to an array
                essentialKnowledgeSkillsExperience: data.essentialKnowledgeSkillsExperience
                    ? data.essentialKnowledgeSkillsExperience.split(",").map(item => item.trim())
                    : [],
                preferredExperience: data.preferredExperience
                    ? data.preferredExperience.split(",").map(item => item.trim())
                    : [],
                deadline: isoDeadline, // Use the validated ISO string
                postedTime: isoPostedTime, // Use the validated ISO string
                appliedPersonInformation: [
                    {
                        name: user?.displayName || "Anonymous",
                        email: user?.email || "No Email Provided"
                    }
                ]
            };

            // Log the job data for debugging
            console.log("Job Data:", jobData);

            // Send the job data to the server
            const response = await axiosSecure.post("/jobs", jobData);

            // Log the backend response for debugging
            console.log("Backend Response:", response);

            if (response.status === 201) {
                Swal.fire({
                    title: "Job Posted Successfully!",
                    icon: "success",
                    text: "The job has been successfully posted.",
                    confirmButtonText: "OK",
                });
                reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    icon: "error",
                    text: "Failed to post the job. Please try again.",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error posting job:", error);
            Swal.fire({
                title: "Error!",
                icon: "error",
                text: error.response?.data?.message || error.message || "Failed to post the job. Please try again.",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div>
            <Helmet>
                <title>Post Job | Job Box</title>
            </Helmet>
            <SectionTitle
                title="Post Jobs"
                description="Reach top talent by posting your job openings. Connect with qualified candidates and grow your team."
            />

            <div className="bg-white shadow-lg p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Post a Job</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Category */}
                        <div>
                            <select
                                {...register("category", { required: "Category Type is required" })}
                                className="p-2 border rounded w-full"
                            >
                                <option value="">Select Category Type</option>
                                <option value="Software">Software Development</option>
                                <option value="Management">Management</option>
                                <option value="Marketing & Sale">Marketing and Sale</option>
                                <option value="Finance">Finance</option>
                                <option value="Human Resource">Human Resource</option>
                                <option value="Retail & Products">Retail & Products</option>
                                <option value="Content Writer">Content Writer</option>
                                <option value="Customer Help">Customer Help</option>
                                <option value="Security Analyst">Security Analyst</option>
                                <option value="Market Research">Market Research</option>
                            </select>
                            {errors.category && <span className='text-red-500'>{errors.category.message}</span>}
                        </div>

                        {/* Company Name */}
                        <div>
                            <input
                                {...register("company", { required: "Company Name is required" })}
                                type="text"
                                placeholder="Company Name"
                                className="p-2 border rounded w-full"
                            />
                            {errors.company && <span className='text-red-500'>{errors.company.message}</span>}
                        </div>

                        {/* Location */}
                        <div>
                            <input
                                {...register("location", { required: "Location is required" })}
                                type="text"
                                placeholder="Location"
                                className="p-2 border rounded w-full"
                            />
                            {errors.location && <span className='text-red-500'>{errors.location.message}</span>}
                        </div>

                        {/* Position */}
                        <div>
                            <input
                                {...register("position", { required: "Position is required" })}
                                type="text"
                                placeholder="Position"
                                className="p-2 border rounded w-full"
                            />
                            {errors.position && <span className='text-red-500'>{errors.position.message}</span>}
                        </div>

                        {/* Employment Type (Dropdown) */}
                        <div>
                            <select
                                {...register("employmentType", { required: "Employment Type is required" })}
                                className="p-2 border rounded w-full"
                            >
                                <option value="">Select Employment Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                            {errors.employmentType && <span className='text-red-500'>{errors.employmentType.message}</span>}
                        </div>

                        {/* Work Type (Dropdown) */}
                        <div>
                            <select
                                {...register("workType", { required: "Work Type is required" })}
                                className="p-2 border rounded w-full"
                            >
                                <option value="">Select Work Type</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                            {errors.workType && <span className='text-red-500'>{errors.workType.message}</span>}
                        </div>

                        {/* Salary */}
                        <div>
                            <input
                                {...register("salary", { required: "Salary is required" })}
                                type="number"
                                placeholder="Salary"
                                className="p-2 border rounded w-full"
                            />
                            {errors.salary && <span className='text-red-500'>{errors.salary.message}</span>}
                        </div>

                        {/* Experience */}
                        <div>
                            <input
                                {...register("experience", { required: "Experience is required" })}
                                type="text"
                                placeholder="Experience"
                                className="p-2 border rounded w-full"
                            />
                            {errors.experience && <span className='text-red-500'>{errors.experience.message}</span>}
                        </div>

                        {/* Logo */}
                        <div>
                            <input
                                {...register("logo", { required: "Logo is required" })}
                                type="file"
                                accept="image/*"
                                className="p-2 border rounded w-full"
                            />
                            {errors.logo && <span className='text-red-500'>{errors.logo.message}</span>}
                        </div>

                        {/* Posted Time */}
                        <div>
                            <input
                                {...register("postedTime", { required: "Posted Time is required" })}
                                type="datetime-local"
                                className="p-2 border rounded w-full"
                            />
                            {errors.postedTime && <span className='text-red-500'>{errors.postedTime.message}</span>}
                        </div>

                        {/* Job Type */}
                        <div>
                            <select
                                {...register("jobType", { required: "Job Type is required" })}
                                className="p-2 border rounded w-full"
                            >
                                <option value="">Select Job Type</option>
                                <option value="Permanent">Permanent</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Contract">Contract</option>
                            </select>
                            {errors.jobType && <span className='text-red-500'>{errors.jobType.message}</span>}
                        </div>

                        {/* Brand */}
                        <div>
                            <input
                                {...register("brand", { required: "Brand is required" })}
                                type="text"
                                placeholder="Brand"
                                className="p-2 border rounded w-full"
                            />
                            {errors.brand && <span className='text-red-500'>{errors.brand.message}</span>}
                        </div>

                        {/* Industry */}
                        <div>
                            <input
                                {...register("industry", { required: "Industry is required" })}
                                type="text"
                                placeholder="Industry"
                                className="p-2 border rounded w-full"
                            />
                            {errors.industry && <span className='text-red-500'>{errors.industry.message}</span>}
                        </div>

                        {/* Job Level */}
                        <div>
                            <select
                                {...register("jobLevel", { required: "Job Level is required" })}
                                className="p-2 border rounded w-full"
                            >
                                <option value="">Select Job Level</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Mid Level">Mid Level</option>
                                <option value="Senior Level">Senior Level</option>
                            </select>
                            {errors.jobLevel && <span className='text-red-500'>{errors.jobLevel.message}</span>}
                        </div>

                        {/* Vision */}
                        <div>
                            <textarea
                                {...register("vision", { required: "Vision is required" })}
                                placeholder="Vision"
                                className="p-2 border rounded w-full"
                            ></textarea>
                            {errors.vision && <span className='text-red-500'>{errors.vision.message}</span>}
                        </div>

                        {/* Ideal Candidate Skills */}
                        <div>
                            <textarea
                                {...register("candidateInformation.idealCandidateSkills", { required: "Ideal Candidate Skills are required" })}
                                placeholder="Ideal Candidate Skills"
                                className="p-2 border rounded w-full"
                            ></textarea>
                            {errors.candidateInformation?.idealCandidateSkills && <span className='text-red-500'>{errors.candidateInformation.idealCandidateSkills.message}</span>}
                        </div>

                        {/* Essential Knowledge, Skills, and Experience */}
                        <div>
                            <textarea
                                {...register("essentialKnowledgeSkillsExperience", { required: "Essential Knowledge, Skills, and Experience are required" })}
                                placeholder="Essential Knowledge, Skills, and Experience"
                                className="p-2 border rounded w-full"
                            ></textarea>
                            {errors.essentialKnowledgeSkillsExperience && <span className='text-red-500'>{errors.essentialKnowledgeSkillsExperience.message}</span>}
                        </div>

                        {/* Preferred Experience */}
                        <div>
                            <textarea
                                {...register("preferredExperience", { required: "Preferred Experience is required" })}
                                placeholder="Preferred Experience"
                                className="p-2 border rounded w-full"
                            ></textarea>
                            {errors.preferredExperience && <span className='text-red-500'>{errors.preferredExperience.message}</span>}
                        </div>
                    </div>

                    {/* Job Description */}
                    <textarea
                        {...register("description", { required: "Job Description is required" })}
                        placeholder="Job Description"
                        className="p-2 border rounded w-full"
                    ></textarea>
                    {errors.description && <span className='text-red-500'>{errors.description.message}</span>}

                    {/* Required Skills */}
                    <textarea
                        {...register("skills", { required: "Skills are required" })}
                        placeholder="Required Skills (comma separated)"
                        className="p-2 border rounded w-full"
                    ></textarea>
                    {errors.skills && <span className='text-red-500'>{errors.skills.message}</span>}

                    {/* Application Deadline */}
                    <input
                        {...register("deadline", { required: "Application Deadline is required" })}
                        type="date"
                        placeholder="Application Deadline"
                        className="p-2 border rounded w-full"
                    />
                    {errors.deadline && <span className='text-red-500'>{errors.deadline.message}</span>}

                    {/* Contact Number */}
                    <input
                        {...register("phoneNumber", { required: "Contact Number is required" })}
                        type="text"
                        placeholder="Contact Number"
                        className="p-2 border rounded w-full"
                    />
                    {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}

                    {/* Company Email */}
                    <input
                        {...register("email", { required: "Company Email is required" })}
                        type="email"
                        placeholder="Company Email"
                        className="p-2 border rounded w-full"
                    />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

                    {/* Submit Button */}
                    <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600">
                        Submit Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;