import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'
import { Alert, AlertIcon, AlertTitle, Avatar, Wrap, WrapItem } from "@chakra-ui/react";

const BlogDetails = () => {
    const Blog = useLoaderData()
    const { user } = useContext(authContext)
    const [comments, setCommet] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/comment/${Blog._id}`)
            .then(res => res.json())
            .then(data => setCommet(data))
    }, [])

    const handleComent = e => {
        e.preventDefault()
        const comment = e.target.comment.value;
        const Comment = {
            comment,
            email: user?.email,
            userProfile: user?.photoURL,
            blogId: Blog._id
        }
        axios.post('http://localhost:5000/comment', Comment)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Comment SUccessfully Submited!',
                        'Your Comment Successfully Submit',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto grid grid-cols-4 mt-6 mb-6">
            <div className="col-span-2 ">
                <img src={Blog.blogPpic} className="w-full" alt="" />

                {user.email == Blog.email ? <Alert status='error' className="my-6">
                    <AlertIcon />
                    <AlertTitle>You are not comment your own blog</AlertTitle>
                </Alert> :
                    <form className="my-2" onSubmit={handleComent}>
                        <label htmlFor="comment" className="text-xl font-bold">Comment Here</label><br />
                        <textarea name="comment" id="" cols="70" className="border-2 border-sky-400 rounded-lg p-2" rows="5"></textarea><br />
                        <button className="bg-sky-400 text-white p-2 rounded-lg mb-6">Submit Comment</button>
                    </form>
                }
                <h1 className="text-xl font-semibold">Total Comment: {comments.length}</h1>
                {
                    comments.map(comment => <div key={comment._id} className="w-3/4">
                        <div className="flex my-2 space-x-4 bg-sky-100 p-4 rounded-lg">
                            <Wrap>
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src={comment.userProfile} />
                                </WrapItem>
                            </Wrap>
                            <div className="">
                                <h4 className="text-xl font-semibold">{comment.email}</h4>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="ml-6">
                <h1 className="text-2xl font-bold mb-4">{Blog.title}</h1>
                <h1>Total Comment: {comments.length}</h1>
                <p>{Blog.CurrentTime}</p>
                <button className="bg-sky-400 py-2 px-6 my-2 mr-4 rounded-lg text-white">{Blog.Category}</button>
                {user.email == Blog.email && <button className="bg-sky-400 py-2 px-6 my-2  rounded-lg text-white">Update</button>
                }

                <p>{Blog.shorDes}</p>
                <h3 className="text-2xl font-bold mt-6">Blog Description</h3>
                <p className="mt-2">{Blog.details}</p>
            </div>
        </div>
    );
};

export default BlogDetails;