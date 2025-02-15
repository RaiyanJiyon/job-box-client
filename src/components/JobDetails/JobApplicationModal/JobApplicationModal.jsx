import React from "react";
import { useForm } from "react-hook-form";
import useCurrentUser from "../../../hooks/useCurrentUser";
import Loader from "../../common/Loader/Loader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const JobApplicationModal = ({ job, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const currentUser = useCurrentUser();

    if (!currentUser) {
        return <Loader />;
    }

    const onSubmit = async (data) => {
        console.log("Application submitted:", data);

        try {
            const response = await axiosPublic.post('/applied-jobs', {
                ...data,  // Form data
                userId: currentUser._id,  // Include user ID in request
                jobId: job._id,  // Include job ID in request
            });

            if (response.status === 200) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Application submitted successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset(); // Resets the form
                onClose(); 
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Failed to submit application!",
                text: error.response?.data?.message || "Something went wrong.",
                showConfirmButton: true,
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-lg sm:max-w-md mx-4 sm:mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 max-h-screen overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <h2 className="text-xl font-bold text-center mb-4">
                        Apply for {job.position} at {job.company}
                    </h2>

                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name:
                        </label>
                        <input
                            {...register("fullName", { required: "Full name is required" })}
                            type="text"
                            id="fullName"
                            defaultValue={currentUser?.name} // Changed from value to defaultValue
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address:
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            type="email"
                            id="email"
                            defaultValue={currentUser?.email} // Changed from value to defaultValue
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number:
                        </label>
                        <input
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10,15}$/,
                                    message: "Enter a valid phone number",
                                },
                            })}
                            type="tel"
                            id="phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Resume Link:
                        </label>
                        <input
                            {...register("resume", { required: "Resume link is required" })}
                            type="url"
                            id="resume"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.resume && <span className="text-red-500">{errors.resume.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                            Cover Letter:
                        </label>
                        <textarea
                            {...register("coverLetter", { required: "Cover letter is required" })}
                            id="coverLetter"
                            rows="5"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        {errors.coverLetter && <span className="text-red-500">{errors.coverLetter.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
