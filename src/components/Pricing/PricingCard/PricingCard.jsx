import { IoMdCheckmark } from "react-icons/io";

const PlanCard = ({ title, price, features, description }) => {
    return (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 hover:bg-gray-100">
            <h5 className="mb-4 text-3xl font-bold">{title}</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-7xl text-blue-700 font-extrabold">$</span>
                <span className="text-7xl text-blue-700 font-extrabold tracking-tight">{price}</span>
                <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
            </div>
            <p className="mt-6 text-gray-600 font-medium">
                {description}
            </p>

            {/* Divider */}
            <div className='border border-b-gray-100 mt-8'></div>

            <ul role="list" className="space-y-5 my-10">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <div className="bg-[#ebeffe] rounded-full p-1">
                            <IoMdCheckmark className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">{feature}</span>
                    </li>
                ))}
            </ul>
            <button type="button" className="text-blue-500 hover:text-white bg-white hover:bg-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-bold rounded-lg px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>
    );
};

const PricingCard = () => {
    const plans = [
        {
            title: "Basic",
            price: "19",
            description: "For most businesses that want to optimize web queries",
            features: [
                "Unlimited updates",
                "Custom designs & features",
                "Custom permissions",
                "Custom instructors",
                "Free support ticket"
            ]
        },
        {
            title: "Standard",
            price: "29",
            description: "For most businesses that want to optimize web queries",
            features: [
                "Unlimited updates",
                "Custom designs & features",
                "Custom permissions",
                "Custom instructors",
                "Free support ticket"
            ]
        },
        {
            title: "Enterprise",
            price: "49",
            description: "For most businesses that want to optimize web queries",
            features: [
                "Unlimited updates",
                "Custom designs & features",
                "Custom permissions",
                "Custom instructors",
                "Free support ticket"
            ]
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-screen-2xl mx-auto">
            {plans.map((plan, index) => (
                <PlanCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    description={plan.description}
                    features={plan.features}
                />
            ))}
        </div>
    );
};

export default PricingCard;
