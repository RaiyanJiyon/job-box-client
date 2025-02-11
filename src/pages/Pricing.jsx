import SectionTitle from "../components/common/SectionTitle";
import PricingCard from "../components/Pricing/PricingCard/PricingCard";
import PricingCover from "../components/Pricing/PricingCover/PricingCover";

const Pricing = () => {
    return (
        <div>
            <PricingCover />

            <div className="my-20">
                <SectionTitle title="Pricing Table" description="Choose The Best Plan That’s For You" />
            </div>

            <div className="my-20">
                <PricingCard />
            </div>
        </div>
    );
};

export default Pricing;