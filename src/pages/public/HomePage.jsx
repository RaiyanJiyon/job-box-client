import BrowseCategory from "../../components/home/BrowseCategory/BrowseCategory";
import Hiring from "../../components/home/Hiring/Hiring";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";

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
                <NewsletterSubscription />
            </div>
        </div>
    );
};

export default HomePage;