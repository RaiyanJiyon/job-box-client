import { useEffect, useState } from "react";
import SectionTitle from "../../common/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

const FAQ = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/public/FAQ.json');
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchQuestions();
    }, []);

    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto">
            <div className="w-1/2 mx-auto">
                <SectionTitle title="Frequently Asked Questions" description="Find answers to the most commonly asked questions about our products, services, and policies. If you need further assistance, please contact our support team." />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
                {reviews.map((review, idx) => (
                    <div key={idx} className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{review.question}</h5>
                        <p className="font-normal text-gray-700 mb-6">
                            {review.answer}
                        </p>
                        <button className="flex items-center gap-2 text-blue-500 font-medium">
                            Keep Reading
                            <FaArrowRightLong className="text-xl text-blue-500 mt-1" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
