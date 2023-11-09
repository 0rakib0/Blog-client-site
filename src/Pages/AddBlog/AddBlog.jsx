import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../AuthProvider/AuthProvider";

const AddBlog = () => {

    const { user } = useContext(authContext)

    const [category, setCategory] = useState([])
    const CurrentTime = new Date()
    useEffect(() => {
        fetch('https://b8a11-server-side-0rakib0.vercel.app/allcategorys')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    const handleAddBlog = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const blogPpic = form.blogPic.value;
        const Category = form.Category.value;
        const shorDes = form.shorDes.value;
        const details = form.details.value;


        console.log('Hello')
        console.log(title.length)
        console.log(shorDes.length)

        if (shorDes.length > 120) {
            Swal.fire(
                'Short Description lenght must be less then 200',
                'Somethink went wrong please submit valid number!',
                'error'
            )
            return
        }


        const Blog = {
            title,
            blogPpic,
            Category,
            shorDes,
            details,
            CurrentTime,
            userName: user?.displayName,
            email: user?.email,
            userPic: user?.photoURL
        }

        console.log(Blog)
        axios.post('https://b8a11-server-side-0rakib0.vercel.app/add-blog', Blog)
            .then(response => {
                // Handle the success response here
                if (response.data.insertedId) {
                    Swal.fire(
                        'Blog Successfully Post',
                        'Your Blog Successfully post!',
                        'success'
                    )
                }
                form.reset()
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });

    }

    return (
        <div className="bg-sky-100 w-11/12 mx-auto mt-6 p-6 rounded-lg">
            <form onSubmit={handleAddBlog}>
                <div className="bg-white md:w-11/12 mx-auto p-4 rounded-lg">
                    <h1 className="text-4xl font-semibold text-center my-2">Add Blog</h1>
                    {/* {error &&
                        <Stack spacing={3}>
                            <Alert status='error' className="rounded-md">
                                <AlertIcon />
                                {error}
                            </Alert>
                        </Stack>
                    } */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Enter Blog Title" className="border-2 border-sky-100 p-2 h-12 rounded-lg mb-3" name="title" required />
                        <input type="text" placeholder="Enter Blog Picture URL" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="blogPic" required />
                    </div>
                    <div className="md:flex gap-4">
                        <select name="Category" className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 w-full md:w-1/2" id="">
                            <option value="comming">Select Category</option>
                            {
                                category.map(cat => <option key={cat._id} value={cat.name}>{cat.name}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Blog short description (Short Description must be in 120 charecter)" className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 w-full md:w-1/2" name="shorDes" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Blog Details Content</label>
                        <textarea className="border-2 border-sky-100 p-2 h-[200px] rounded-lg" name="details" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <input type="submit" value='Add Blog' className="border-2 border-sky-100  p-2 h-12 rounded-lg mt-4 hover:text-white hover:bg-sky-400" required />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;