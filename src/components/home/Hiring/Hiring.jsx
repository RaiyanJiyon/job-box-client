import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hiring = () => {
    return (
        <section className="w-11/12 max-w-screen-2xl mx-auto p-5 lg:p-2  border border-gray-200 shadow-md rounded-lg bg-white">
            {/* Container */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Left Illustration */}
                <img
                    className="hidden lg:flex md:w-32"
                    src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?t=st=1738509717~exp=1738513317~hmac=39ace2c07afde6088e245ad73f2da2f86e79be5260fb2bddef8b2752f16d7474&w=900"
                    alt="Hiring Illustration"
                />

                {/* Text Content */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 text-center sm:text-left">
                    <div>
                        <h3 className="text-gray-700 font-semibold text-lg sm:text-xl">WE ARE</h3>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">HIRING</h2>
                    </div>
                    <p className="md:mt-10 ml-4 text-gray-700 text-sm sm:text-base">
                        Let’s <span className="font-semibold">Work</span> Together <br /> & <span className="font-semibold">Explore</span> Opportunities
                    </p>
                </div>

                {/* Apply Button */}
                <Link
                    to={"/jobs"}
                    type="button"
                    className="flex items-center md:mt-10 bg-[#3c65f5] hover:bg-[#05264e] text-white font-medium rounded-lg text-sm sm:text-base px-4 sm:px-6 py-2 transition duration-300">
                    <CiCircleCheck className="mr-2 text-lg" />
                    Apply Now
                </Link>

                {/* Right Illustration */}
                <img
                    className="hidden lg:flex md:w-32"
                    src="https://img.freepik.com/free-vector/desktop-with-social-media-marketing-icons_24877-56497.jpg?t=st=1738510342~exp=1738513942~hmac=4109e6b0c02d4f826e27999afe673b361021d78bc06084dda053623e41cf3ef5&w=740"
                    alt="Job Illustration"
                />
            </div>
        </section>
    );
};

export default Hiring;
