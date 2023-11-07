import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const Blog = useLoaderData()

    return (
        <div className="w-11/12 mx-auto grid grid-cols-4 mt-6">
            <div className="col-span-2 ">
                <img src={Blog.blogPpic} className="w-full" alt="" />
                <h3 className="text-2xl font-bold mt-6">Blog Description</h3>
                <p className="mt-2">{Blog.details}</p>
            </div>
            <div className="ml-6">
                <h1 className="text-2xl font-bold mb-4">{Blog.title}</h1>
                <p>{Blog.CurrentTime.toString()}</p>
                <button className="bg-sky-400 py-2 px-6 my-2  rounded-r-lg text-white">{Blog.Category}</button>
                <p>{Blog.shorDes}</p>
            </div>
        </div>
    );
};

export default BlogDetails;