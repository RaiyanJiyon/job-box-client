import { useEffect, useState } from "react";
import NewsAndBlog from "../../components/home/NewsAndBlog/NewsAndBlog";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";

const Candidate = () => {
    useScrollToTop();
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('/candidates.json');
                const data = await response.json();
                setCandidates(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchCandidates();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Candidate | Job Box</title>
            </Helmet>

            <PageCover backgroundImage="https://i.ibb.co/MDNsJCHy/cover.jpg" title="Browse Candidates" description="Find the best candidates for your company. Explore their profiles, see their experience and skills." pageName="Candidates" nextPageName="Contacts" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 max-w-screen-2xl mx-auto mt-16">
                {
                    candidates.map((candidate, idx) => (
                        <CandidateCard key={idx} candidate={candidate} />
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

export default Candidate;