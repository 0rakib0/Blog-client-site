import { AiOutlineApartment } from "react-icons/ai";
import { Link } from "react-router-dom";

const FeaturedBlog = ({ blog }) => {
    const {title, blogPpic, Category, _id} = blog
    return (
        <div className="flex ml-6">
            <div className="h-[130px] w-2/3">
                <img src={blogPpic} className="h-full w-[200px]" alt="" />
            </div>
            <div className="ml-1">
                <h1 className="text-xl font-semibold ">{title}</h1>
                <button className="bg-sky-400 text-white px-2 my-2 rounded-md flex items-center gap-2"><AiOutlineApartment></AiOutlineApartment>{Category}</button>
                <div className="flex gap-2">
                    <Link to={`/blog-details/${_id}`}><button className="bg-sky-400 text-white px-1 my-2 rounded-md flex items-center">Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog