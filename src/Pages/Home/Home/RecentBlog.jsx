import PropTypes from 'prop-types';
import { AiOutlineApartment } from "react-icons/ai";
import { Link } from 'react-router-dom';

const RecentBlog = ({ blog }) => {
    const { _id, title, blogPpic, Category, shorDes } = blog
    return (
        <div className="md:flex gap-4 my-4 bg-sky-100 p-2 rounded-lg">
            <div>
                <img src={blogPpic} className="md:w-[400px] md:h-[200px]" alt="" />
            </div>
            <div className="md:w-3/5 mx-2">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p>{shorDes}</p>
                <button className="bg-sky-400 text-white px-2 my-2 rounded-md flex items-center gap-2"><AiOutlineApartment></AiOutlineApartment>{Category}</button>
                <div className="flex gap-4">
                    <Link to={`/blog-details/${_id}`} className="bg-sky-400 text-white p-2 my-2 rounded-md flex items-center gap-2">Details</Link>
                    <button className="bg-sky-400 text-white p-2 my-2 rounded-md flex items-center gap-2">Add To Wish List</button>
                </div>
            </div>
        </div>
    );
};

RecentBlog.propTypes  = {
    blog: PropTypes.object
}

export default RecentBlog;