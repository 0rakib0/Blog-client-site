import Categor from "../Category/Categor";
import Banner from "./Banner/Banner";
import { AiOutlineApartment } from "react-icons/ai";
import RecentBlog from "./RecentBlog";
import { useEffect, useState } from "react";
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { Avatar, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Wrap, WrapItem } from "@chakra-ui/react";

const Home = () => {
    const [recentBlog, setRecentBlog] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recent-blog')
            .then(res => res.json())
            .then(data => setRecentBlog(data))
    }, [])
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
            {/* Main section0 */}
            <h1 className="text-2xl font-bold my-4">Read Recent Blog</h1>
            <div className="grid grid-cols-5 items-start">
                <div className="col-span-3">

                    {
                        recentBlog.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
                    }

                </div>
                <div className="col-span-2 ml-6 mt-0">
                    <h1 className="ml-12 text-2xl  font-semibold mb-6">Popular Post</h1>
                    <div className="flex ml-6">
                        <div className="h-[130px] w-2/3 mx-4">
                            <img src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg" className="h-full" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-xl font-semibold ">Traveling is the best way to world</h1>
                            <button className="bg-sky-400 text-white px-2 my-2 rounded-md flex items-center gap-2"><AiOutlineApartment></AiOutlineApartment> Travel</button>
                            <div className="flex gap-2">
                                <button className="bg-sky-400 text-white px-1 my-2 rounded-md flex items-center">Details</button>
                                <button className="bg-sky-400 text-white px-1 py-[2px] my-2 rounded-md flex items-center gap-2">Add To Wish List</button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl md:mt-12 font-bold ml-12">Social Plugin</h1>
                    <div className="ml-12">
                        <div className="flex gap-6 my-2 justify-center space-x-8">
                            <h1 className="flex items-center gap-2 text-xl text-[#3b5999]"><AiFillFacebook></AiFillFacebook> Facebook</h1>
                            <h1 className="flex items-center gap-2 text-xl text-[#3fbb50]"><AiOutlineWhatsApp></AiOutlineWhatsApp> WhatsApp</h1>
                        </div>
                        <div className="flex gap-4 my-2 space-x-8 justify-center">
                            <h1 className="flex items-center gap-2 text-xl text-[#dd277b]"><AiOutlineInstagram></AiOutlineInstagram> Instagram</h1>
                            <h1 className="flex items-center gap-2 text-xl text-[#f50000]"><AiOutlineYoutube></AiOutlineYoutube> Youttube</h1>
                        </div>
                    </div>

                    <h1 className="text-2xl md:mt-12 font-bold ml-12">Recent Comment</h1>
                    <div className="ml-12">
                        <div className="flex my-2 space-x-4">
                            <Wrap>
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                </WrapItem>
                            </Wrap>
                            <div className="">
                                <h4 className="text-xl font-semibold">Rakibul Hasan</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque ea cupiditate numquam illum, sapiente explicabo! Vitae beatae quis quasi?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-sky-100 w-11/12 text-center mx-auto py-6 rounded-lg mb-12">
                <h4 className="text-4xl font-bold my-2">Subscirve To Our News Latter</h4>
                <p className="mb-4">subscribe our Pachange and get a valuable discount</p>
                <input type="email" placeholder="Enter Email" className="border-2 w-3/5 border-sky-400 p-2 h-12 rounded-l-lg z-10 " name="email" required />
                 <button className="bg-sky-400 h-12 px-4 rounded-r-lg text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Home;