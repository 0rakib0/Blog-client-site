import Categor from "../Category/Categor";
import Banner from "./Banner/Banner";
import RecentBlog from "./RecentBlog";
import { useEffect, useState } from "react";
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Category2 from "../Category/Category2";
import FeaturedBlog from "./FeaturedBlog";
import { Link } from "react-router-dom";

const Home = () => {
    const [recentBlog, setRecentBlog] = useState([])
    const [Categorys, setCategorys] = useState([])

    const [Featured, setFeatured] = useState([])

    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recent-blog')
            .then(res => res.json())
            .then(data => setRecentBlog(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/categorys')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/sort-Blog')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setComment(data))
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
            <div className="grid lg:grid-cols-5 items-start">
                <div className="col-span-3">

                    {
                        recentBlog.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
                    }
                    <Link to='/all-blogs'><button className="bg-sky-400 text-white p-2 rounded-lg">Read More Blog</button></Link>
                </div>
                <div className="col-span-2 ml-6 mt-0">
                    <h1 className="md:ml-12 text-2xl  font-semibold mb-6">Featured Blogs</h1>
                    {
                        Featured.map(blog => <FeaturedBlog key={blog._id} blog={blog}></FeaturedBlog>)
                    }
                    <h1 className="ml-8 mt-6 text-2xl  font-semibold mb-6">All Category</h1>
                    <div className="grid md:grid-cols-2 gap-2 ml-6">
                        {
                            Categorys.map(category => <Category2 key={category._id} category={category}></Category2>)
                        }
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
                        {
                            comment.map(comment => <div key={comment._id} className="flex my-2 space-x-4">
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name='Dan Abrahmov' src={comment.userProfile} />
                                    </WrapItem>
                                </Wrap>
                                <div className="">
                                    <h4 className="text-xl font-semibold">{comment.email}</h4>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="bg-sky-100 text-center mx-auto py-6 rounded-lg pb-12">
                <h4 className="text-4xl font-bold my-2">Subscirve To Our News Latter</h4>
                <p className="mb-4">subscribe our Pachange and get a valuable discount</p>
                <input type="email" placeholder="Enter Email" className="border-2 w-3/5 border-sky-400 p-2 h-12 rounded-l-lg z-10 " name="email" required />
                <button className="bg-sky-400 h-12 px-4 rounded-r-lg text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Home;