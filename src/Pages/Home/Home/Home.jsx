import Categor from "../Category/Categor";
import Banner from "./Banner/Banner";
import RecentBlog from "./RecentBlog";
import { useEffect, useState } from "react";
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Category2 from "../Category/Category2";
import FeaturedBlog from "./FeaturedBlog";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { motion, useAnimation } from 'framer-motion';
import { useQuery } from "react-query";
import ContentLoader from "react-content-loader";

const Home = () => {
    // const [recentBlog, setRecentBlog] = useState([])
    // const [Categorys, setCategorys] = useState([])

    // const [Featured, setFeatured] = useState([])

    // const [comment, setComment] = useState([])


    const controls = useAnimation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                controls.start({ opacity: 1 });
            } else {
                controls.start({ opacity: 0 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    const { data: recentBlog, isLoading } = useQuery('recentblog', async () => {
        const response = await fetch('https://b8a11-server-side-0rakib0.vercel.app/recent-blog');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });


    // useEffect(() => {
    //     fetch('https://b8a11-server-side-0rakib0.vercel.app/allcategorys')
    //         .then(res => res.json())
    //         .then(data => setCategorys(data))
    // }, [])

    const { data: Categorys } = useQuery('AllCategory', async () => {
        const response = await fetch('https://b8a11-server-side-0rakib0.vercel.app/allcategorys');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });



    // useEffect(() => {
    //     fetch('https://b8a11-server-side-0rakib0.vercel.app/sort-Blog')
    //         .then(res => res.json())
    //         .then(data => setFeatured(data))
    // }, [])

    const { data: Featured } = useQuery('Featured', async () => {
        const response = await fetch('https://b8a11-server-side-0rakib0.vercel.app/sort-Blog');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    // useEffect(() => {
    //     fetch('https://b8a11-server-side-0rakib0.vercel.app/comment')
    //         .then(res => res.json())
    //         .then(data => setComment(data))
    // }, [])

    const { data: comment } = useQuery('comment', async () => {
        const response = await fetch('https://b8a11-server-side-0rakib0.vercel.app/comment');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    const handleNewsLatter = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const user = {
            email
        }

        axios.post('https://b8a11-server-side-0rakib0.vercel.app/newslatter', user)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        '"Thank you for subscribing to our newsletter',
                        'You Subscription successfully submited!',
                        'success'
                    )

                }
            })
    }

    if (isLoading) {
        return <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <circle cx="20" cy="20" r="20" />
        </ContentLoader>
    }

    return (
        <div className="w-11/12 mx-auto">
            {/* banner section */}
            <motion.div initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="element-to-animate my-6">
                <Banner></Banner>
            </motion.div>
            {/* Category Section */}
            <motion.div initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="element-to-animate" >
                <Categor></Categor>
            </motion.div>
            {/* Main section0 */}
            <h1 className="text-2xl font-bold my-4">Read Recent Blog</h1>
            <div className="grid lg:grid-cols-5 items-start">
                <div className="col-span-3">

                    {
                        recentBlog?.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
                    }
                    <Link to='/all-blogs'><button className="bg-sky-400 text-white p-2 rounded-lg">Read More Blog</button></Link>
                </div>
                <div className="col-span-2 ml-6 mt-0">
                    <h1 className="md:ml-12 text-2xl  font-semibold mb-6">Featured Blogs</h1>
                    {
                        Featured?.map(blog => <FeaturedBlog key={blog._id} blog={blog}></FeaturedBlog>)
                    }
                    <h1 className="ml-8 mt-6 text-2xl  font-semibold mb-6">All Category</h1>
                    <div className="grid md:grid-cols-2 gap-2 ml-6">
                        {
                            Categorys?.map(category => <Category2 key={category._id} category={category}></Category2>)
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
                    <motion.div initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                        className="ml-12 element-to-animate">
                        {
                            comment?.map(comment => <div key={comment._id} className="flex my-2 space-x-4">
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name='Dan Abrahmov' src={comment.userProfile} />
                                    </WrapItem>
                                </Wrap>
                                <div className="">
                                    <h4 className="text-xl font-semibold">{comment.userName}</h4>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>)
                        }
                    </motion.div>
                </div>
            </div>
            <div className="bg-sky-100 text-center mx-auto py-6 rounded-lg pb-12">
                <h4 className="text-4xl font-bold my-2">Subscirve To Our News Latter</h4>
                <p className="mb-4">subscribe our Packange and get a valuable discount</p>
                <form onSubmit={handleNewsLatter}>
                    <input type="email" placeholder="Enter Email" className="border-2 w-3/5 border-sky-400 p-2 h-12 rounded-l-lg z-10 " name="email" required />
                    <button className="bg-sky-400 h-12 px-4 rounded-r-lg text-white">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Home;