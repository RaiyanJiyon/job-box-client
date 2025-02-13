import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/common/SectionTitle";
import Testimonial from "../../components/Contact/Testimonial/Testimonial";
import NewsletterSubscription from "../../components/home/NewsletterSubscription/NewsletterSubscription";
import FAQ from "../../components/Pricing/FAQ/FAQ";
import PricingCard from "../../components/Pricing/PricingCard/PricingCard";
import PricingCover from "../../components/Pricing/PricingCover/PricingCover";
import useScrollToTop from "../../hooks/useScrollToTop";

const Pricing = () => {
    useScrollToTop();

    return (
        <div>
            <Helmet>
                <title>Pricing | Job Box</title>
            </Helmet>

            <PricingCover />

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