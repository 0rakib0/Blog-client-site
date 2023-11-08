import axios from "axios";
import { useEffect, useState } from "react";
import RecentBlog from "../Home/Home/RecentBlog";
import Category2 from "../Home/Category/Category2";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineApartment, AiOutlineInstagram, AiOutlineSearch, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [Categorys, setCategorys] = useState([])

    const [selectCategory, setCelectCategory] = useState([])
    const [selectTitle, setSelectTitle] = useState([])

    const handleCategory = e => {
        // console.log(e.target.value)
        setCelectCategory(e.target.value)
    }

    const handleTitle = e => {
        e.preventDefault()
        const titleVal = e.target.serch.value
        setSelectTitle(titleVal)
    }

    useEffect(() => {
        fetch('https://blog-zeta-seven-90.vercel.app/allcategorys')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    useEffect(() => {
        axios.get(`https://blog-zeta-seven-90.vercel.app/all-blog?category=${selectCategory}&title=${selectTitle}`)
            .then(data => setBlogs(data.data))

        // fetch('https://blog-zeta-seven-90.vercel.app/all-blog')
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
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;