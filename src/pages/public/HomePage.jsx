import Hiring from "../../components/home/Hiring/Hiring";
import Test from "../../components/home/Test/Test";

const HomePage = () => {
    return (
        <div>
        <div className="my-20">
            <Hiring />
        </div>
        <div className="my-20">
            <Test />
        </div>

        </div>
    );
};

export default HomePage;