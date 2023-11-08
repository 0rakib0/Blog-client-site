import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AiOutlineApartment } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from "react";


const RecentBlog = ({ blog }) => {

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
    const { user } = useContext(authContext)


    const { _id, title, blogPpic, Category, shorDes, details } = blog
    const handleWishList = (id, title, blogPpic, shorDes) => {
        if (!user) {
            Swal.fire({
                title: "Login First",
                text: "For Added to Wishlist please Login First!",
                icon: "error"
            });
        }
        const wishList = {
            email: user.email,
            id,
            title,
            blogPpic,
            shorDes

        }
        axios.post('http://localhost:5000/addToWishlist', wishList)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Blog Added To Your WishList",
                        text: "Blog successfully added to your withlist!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <motion.div initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', damping: 10, stiffness: 100 }}
            className="md:flex gap-4 my-4 bg-sky-100 p-2 rounded-lg element-to-animate">
            <div>
                <img src={blogPpic} className="md:w-[400px] md:h-[200px]" alt="" />
            </div>
            <div className="md:w-3/5 mx-2">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p>{shorDes}</p>
                <p>Details lenght: {details.length}</p>
                <button className="bg-sky-400 text-white px-2 my-2 rounded-md flex items-center gap-2"><AiOutlineApartment></AiOutlineApartment>{Category}</button>
                <div className="flex gap-4">
                    <Link to={`/blog-details/${_id}`} className="bg-sky-400 text-white p-2 my-2 rounded-md flex items-center gap-2">Details</Link>
                    <button onClick={() => handleWishList(_id, title, blogPpic, shorDes)} className="bg-sky-400 text-white p-2 my-2 rounded-md flex items-center gap-2">Add To Wish List</button>
                </div>
            </div>
        </motion.div>
    );
};

RecentBlog.propTypes = {
    blog: PropTypes.object,
    // handleWishList: PropTypes.func,
}

export default RecentBlog;