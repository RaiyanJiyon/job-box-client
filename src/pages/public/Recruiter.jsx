import { useEffect, useState } from "react";
import RecruiterCard from "../../components/Recruiter/RecruiterCard/RecruiterCard";
import NewsAndBlog from "../../components/home/NewsAndBlog/NewsAndBlog";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";

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

            <PageCover backgroundImage="https://i.ibb.co/MDNsJCHy/cover.jpg" title="Browse Companies" description="Discover companies that are actively hiring and find your perfect job match." pageName="Recruiters" nextPageName="Candidates" />
            
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