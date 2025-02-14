import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const RecruiterCard = ({ recruiter }) => {
    return (
        <div className="bg-[#f8faff] rounded-xl border border-gray-200 p-6 text-center hover:bg-gray-100">
            <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <img
                        src={`${recruiter.companyLogo}`}
                        alt={`${recruiter.companyName} logo`}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{recruiter.companyName}</h3>
            <div className="flex items-center justify-center mt-2">
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            fill={i < recruiter.rating ? "currentColor" : "none"}
                            className="mr-1"
                        />
                    ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">{recruiter.rating}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">📍 New York, US</p>
            <Link to={'/jobs'}>
                <button className="mt-5 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-200">
                    {recruiter.openJobs} Jobs Open
                </button>
            </Link>
        </div>
    );
};

export default RecruiterCard;