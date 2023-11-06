
import { AiOutlineApartment } from "react-icons/ai";

const RecentBlog = ({ blog }) => {
    const { title, blogPpic, Category, shorDes } = blog
    return (
        <div className="flex gap-4 my-4">
            <div>
                <img src={blogPpic} className="w-[400px] h-[200px]" alt="" />
            </div>
            <div className="w-3/5 mx-2">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p>{shorDes}</p>
                <button className="bg-sky-400 text-white px-2 my-2 rounded-md flex items-center gap-2"><AiOutlineApartment></AiOutlineApartment>{Category}</button>
                <div className="flex gap-4">
                    <button className="bg-sky-400 text-white p-2 my-2 rounded-md flex items-center gap-2">Details</button>
                    <button className="bg-sky-400 text-white p-2 my-2 rounded-md flex items-center gap-2">Add To Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;