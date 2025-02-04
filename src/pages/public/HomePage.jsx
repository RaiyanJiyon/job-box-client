import BrowseCategory from "../../components/home/BrowseCategory/BrowseCategory";
import Hiring from "../../components/home/Hiring/Hiring";
import JobsByLocation from "../../components/home/JobsByLocation/JobsByLocation";
import NewsAndBlog from "../../components/home/NewsAndBlog/NewsAndBlog";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import TopRecruiters from "../../components/home/TopRecruiters/TopRecruiters";

const HomePage = () => {
    return (
        <div>
            <div className="my-20">
                <BrowseCategory />
            </div>
            <div className="my-20">
                <Hiring />
            </div>
            <div className="my-20">
                <TopRecruiters />
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