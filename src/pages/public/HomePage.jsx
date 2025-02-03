import BrowseCategory from "../../components/home/BrowseCategory/BrowseCategory";
import Hiring from "../../components/home/Hiring/Hiring";

const HomePage = () => {
    return (
        <div>
            <div className="my-20">
                <BrowseCategory />
            </div>
            <div className="my-20">
                <Hiring />
            </div>
        </div>
    );
};

export default HomePage;