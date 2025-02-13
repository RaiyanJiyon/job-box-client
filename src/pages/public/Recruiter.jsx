import { useEffect, useState } from "react";
import RecruiterCard from "../../components/Recruiter/RecruiterCard/RecruiterCard";
import NewsAndBlog from "../../components/home/NewsAndBlog/NewsAndBlog";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet-async";

const Recruiter = () => {
    useScrollToTop();
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        const fetchRecruiters = async () => {
            try {
                const response = await fetch('/recruiters.json');
                const data = await response.json();
                setRecruiters(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchRecruiters();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Recruiter | Job Box</title>
            </Helmet>

            <div className="relative h-36 bg-cover bg-center mt-2" style={{ backgroundImage: 'url(https://i.ibb.co/MDNsJCHy/cover.jpg)' }}>
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

                {/* Content */}
                <div className="relative  flex flex-col justify-center h-full w-11/12 max-w-screen-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-2">Browse Companies</h2>
                    <p className="text-gray-200">Discover companies that are actively hiring and find your perfect job match.</p>

                    {/* Breadcrumb navigation */}
                    <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-lg text-sm">
                        <span className="text-gray-600">Recruiters</span>
                        <span className="mx-2 text-gray-400">›</span>
                        <span className="text-gray-800">Blog</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 max-w-screen-2xl mx-auto mt-16">
                {
                    recruiters.map((recruiter, idx) => (
                        <RecruiterCard key={idx} recruiter={recruiter} />
                    ))
                }
            </div>
            <div className="mt-16">
                <NewsAndBlog />
            </div>
            <div className="my-16">
                <NewsletterSubscription />
            </div>
        </div>
    );
};

export default Recruiter;