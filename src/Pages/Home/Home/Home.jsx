import Categor from "../Category/Categor";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* banner section */}
            <div className="my-6">
                <Banner></Banner>
            </div>
            {/* Category Section */}
            <div>
                <Categor></Categor>
            </div>
        </div>
    );
};

export default Home;