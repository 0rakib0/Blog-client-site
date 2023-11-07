import { Avatar, Menu, MenuButton, MenuItem, MenuList, Wrap, WrapItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import './ActiveLink.css'

const NavBar = () => {

    const {user, Logout} = useContext(authContext)
    const handleLogout = () =>{
        Logout()
    }
    const NavLinks = <div className="flex flex-col md:flex-row gap-4 gap-y-2">
        <NavLink to='/' className='hover:bg-sky-400 rounded-md hover:text-white p-2'>HOME</NavLink>
        <NavLink to='/add-blog' className='hover:bg-sky-400 rounded-md hover:text-white p-2'>ADD BLOG</NavLink>
        <NavLink to='/all-blogs' className='hover:bg-sky-400 rounded-md hover:text-white p-2'>ALL BLOGS</NavLink>
        <NavLink to='/featured-blog' className='hover:bg-sky-400 rounded-md hover:text-white p-2'>FEATURED BLOG</NavLink>
        <NavLink to='/with-list' className='hover:bg-sky-400 rounded-md hover:text-white p-2'>WISHLIST</NavLink>
        { user ? <button className='hover:bg-sky-400 rounded-md hover:text-white p-2' onClick={handleLogout}>LOGOUT</button>:
        <NavLink className='hover:bg-sky-400 rounded-md hover:text-white p-2' to='/login'>LOGIN</NavLink>
        }
    </div>
    
    return (
        <div className="bg-sky-100 rounded-md mx-auto p-2 pl-6  md:py-4">
            <div className="flex items-center lg:px-4">
                <div>
                    <h1 className="text-4xl font-bold">
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/OnlyFans-logo-symbol-icon-png-blue-background.png" className="w-14 rounded-xl" alt="" />
                    </h1>
                </div>
                <div className="hidden lg:inline md:ml-24">
                    <ul>
                        <li>{NavLinks}</li>
                    </ul>
                </div>
                {user && <div className="lg:ml-6 md:ml-16 flex items-center">
                        <h1 className="mr-6 ml-6 text-xl">{user&& user.displayName}</h1>
                    <Wrap className="">
                        <WrapItem>
                            <Avatar
                                size='lg'
                                name='Prosper Otemuyiwa'
                                src={user&& user.photoURL}
                            />{' '}
                        </WrapItem>
                        
                    </Wrap>
                </div>}
            </div>
            <div className="lg:hidden">
                <Menu>
                    <MenuButton>
                        <AiOutlineMenu className="text-4xl"></AiOutlineMenu>
                    </MenuButton>
                    <MenuList>
                        <MenuItem className="hover:bg-white pt-4">{NavLinks}</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    );
};

export default NavBar;