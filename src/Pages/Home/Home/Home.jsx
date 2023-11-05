import { useContext } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";


const Home = () => {
    const {name} = useContext(authContext)
    return (
        <div>
            <h1>Name Is: {name}</h1>
        </div>
    );
};

export default Home;