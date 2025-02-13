import { Star, MapPin } from "lucide-react"; // Ensure these imports are correct

const CandidateCard = ({ candidate }) => {
    return (
        <div className=" bg-blue-50 rounded-xl border border-blue-200 p-6">
            {/* Top Section: Profile Picture and Name */}
            <div className="flex items-center mb-4">
                {/* Profile Picture */}
                <div className="relative w-20 h-20">
                    <img
                        src={`${candidate.profilePicture}`} // Replace with the user's image URL
                        alt={`${candidate.name} profile`}
                        className="w-full h-full rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                </div>

                {/* Name and Title */}
                <div className="ml-4 text-left">
                    <h3 className="text-xl font-semibold text-gray-800">{candidate.name}</h3>
                    <p className="text-sm text-gray-500">{candidate.title}</p>

                    {/* Rating */}
                    <div className="flex items-center mt-2">
                        <div className="flex items-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    fill="currentColor"
                                    className={`mr-1 ${i < candidate.rating ? "text-yellow-500" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm ml-2">({candidate.ratingCount})</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-4">
                {candidate.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
                {candidate.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-lg"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {/* Divider */}
            <div className='border border-b-blue-100 my-8'></div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-gray-500">
                <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{candidate.location}</span>
                </div>
                <div className="text-gray-800 font-semibold">{candidate.hourlyRate}</div>
            </div>
        </div>
    );
};

export default CandidateCard;