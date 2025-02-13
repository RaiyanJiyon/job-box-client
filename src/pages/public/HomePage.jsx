import { Helmet } from "react-helmet-async";
import BrowseCategory from "../../components/home/BrowseCategory/BrowseCategory";
import Hero from "../../components/home/Hero/Hero";
import Hiring from "../../components/home/Hiring/Hiring";
import JobCardsList from "../../components/home/JobCardsList/JobCardsList";
import JobsByLocation from "../../components/home/JobsByLocation/JobsByLocation";
import JobSearchBanner from "../../components/home/JobSearchBanner/JobSearchBanner";
import NewsAndBlog from "../../components/home/NewsAndBlog/NewsAndBlog";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import ProfileCreation from "../../components/home/ProfileCreation/ProfileCreation";
import StatisticsSection from "../../components/home/StatisticsSection/StatisticsSection";
import TopRecruiters from "../../components/home/TopRecruiters/TopRecruiters";
import useScrollToTop from "../../hooks/useScrollToTop";

const HomePage = () => {
    useScrollToTop();
    return (
        <div>
            <Helmet>
                <title>Home | Job Box</title>
            </Helmet>
            
            <div className="pb-20">
                <Hero />
            </div>
            <div className="my-10">
                <StatisticsSection />
            </div>
            <div className="my-20">
                <BrowseCategory />
            </div>
            <div className="my-20">
                <Hiring />
            </div>
            <div className="my-20">
                <JobCardsList />
            </div>
            <div className="my-20">
                <JobSearchBanner />
            </div>
            <div className="my-20">
                <TopRecruiters />
            </div>
            <div className="my-20">
                <ProfileCreation />
            </div>
            <div className="my-20">
                <JobsByLocation />
            </div>
            <div className="my-20">
                <NewsAndBlog />
            </div>
            <div className="my-20">
                <NewsletterSubscription />
            </div>
        </div>
    );
};

export default HomePage;