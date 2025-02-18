import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/common/SectionTitle";
import Testimonial from "../../components/Contact/Testimonial/Testimonial";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import FAQ from "../../components/Pricing/FAQ/FAQ";
import PricingCard from "../../components/Pricing/PricingCard/PricingCard";
import useScrollToTop from "../../hooks/useScrollToTop";
import PageCover from "../../components/PageCover/PageCover";

const Pricing = () => {
    useScrollToTop();

    return (
        <div>
            <Helmet>
                <title>Pricing | Job Box</title>
            </Helmet>

            <PageCover backgroundImage="https://i.ibb.co/MDNsJCHy/cover.jpg" title="Pricing" description="Pricing built to suits teams of all sizes." pageName="Pricing" nextPageName="Home" />

            <div className="my-20">
                <SectionTitle title="Pricing Table" description="Choose The Best Plan That’s For You" />
            </div>

            <div className="my-20">
                <PricingCard />
            </div>

            <div className="my-20">
                <FAQ />
            </div>
            <div className="my-20">
                <Testimonial />
            </div>
            <div className="my-20">
                <NewsletterSubscription />
            </div>
        </div>
    );
};

export default Pricing;