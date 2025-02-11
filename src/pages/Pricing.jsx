import SectionTitle from "../components/common/SectionTitle";
import PricingCover from "../components/Pricing/PricingCover/PricingCover";

const Pricing = () => {
    return (
        <div>
            <PricingCover />

            <div className="my-20">
                <SectionTitle title="Pricing Table" description="Choose The Best Plan That’s For You" />
            </div>
        </div>
    );
};

export default Pricing;