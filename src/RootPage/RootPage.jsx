import { Outlet } from "react-router-dom";
import NavBar from "../SharePage/Navbar/NavBar";


const RootPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootPage;