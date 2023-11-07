import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlog from "../Home/Home/RecentBlog";
import Category2 from "../Home/Category/Category2";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineApartment, AiOutlineInstagram, AiOutlineSearch, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [Categorys, setCategorys] = useState([])

    const [selectCategory, setCelectCategory] = useState([])
    const [selectTitle, setSelectTitle] = useState([])

    const handleCategory = e => {
        // console.log(e.target.value)
        setCelectCategory(e.target.value)
    }

    const handleTitle = e =>{
        e.preventDefault()
        const titleVal = e.target.serch.value
        setSelectTitle(titleVal)
    }

    useEffect(() => {
        fetch('http://localhost:5000/categorys')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/all-blog?category=${selectCategory}&title=${selectTitle}`)
            .then(data => setBlogs(data.data))

        // fetch('http://localhost:5000/all-blog')
        // .then(res => res.json())
        // .then(data => setBlogs(data))
    }, [selectCategory, selectTitle])
    return (
        <div className="w-11/12 mx-auto">
            <div className="m-4 lg:flex justify-between">
                <div className="mb-2">
                    <form onSubmit={handleTitle}>
                        <input type="text" className="h-12 border-2 border-sky-400 lg:w-[500px] rounded-l-lg p-2" placeholder="Serch" name="serch" />
                        <button className="h-12 bg-sky-400 px-6 rounded-r-lg text-white"><AiOutlineSearch></AiOutlineSearch></button>
                    </form>
                </div>
                <div>
                    <select name="" id="" onChange={handleCategory} className="h-12 border-2 border-sky-400 rounded-lg p-2 w-full">
                        <option value="" selected>Select Category</option>
                        {
                            Categorys.map(cat => <option key={cat._id} value={cat.name}>{cat.name}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-5 items-start">
                <div className="col-span-3">

                    {
                        blogs.map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
                    }

                </div>
                <div className="col-span-2 ml-6 mt-0">
                    <h1 className="md:ml-12 text-2xl  font-semibold mb-6">Popular Post</h1>
                    <div className="flex ml-6">
                        <div className="h-[130px] w-2/3 md:mx-4">
                            <img src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg" className="h-full" alt="" />
                        </div>
                        <div className="ml-1">
                            <h1 className="text-xl font-semibold ">Traveling is the best way to world</h1>
                            <button className="bg-sky-400 text-white px-2 my-2 rounded-md flex items-center gap-2"><AiOutlineApartment></AiOutlineApartment> Travel</button>
                            <div className="flex gap-2">
                                <button className="bg-sky-400 text-white px-1 my-2 rounded-md flex items-center">Details</button>
                                <button className="bg-sky-400 text-white px-1 py-[2px] my-2 rounded-md flex items-center gap-2">Add To Wish List</button>
                            </div>
                        </div>
                    </div>
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
        </div>
    );
};

export default AllBlogs;