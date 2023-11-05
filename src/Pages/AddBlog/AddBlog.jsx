import { Link } from "react-router-dom";

const AddBlog = () => {
    return (
        <div className="bg-sky-100 w-11/12 mx-auto mt-6 p-6 rounded-lg">
            <form>
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
                        <input type="text" placeholder="Enter Blog Picture URL" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="name" required />
                    </div>
                    <div className="md:flex gap-4">
                        <select name="" className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 w-full md:w-1/2" id="">
                            <option value="">Select Category</option>
                        </select>
                        <input type="email" placeholder="Blog short description" className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 w-full  md:w-1/2" name="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Blog Details Content</label>
                        <textarea className="border-2 border-sky-100 p-2 h-[200px] rounded-lg" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <input type="submit" value='Register' className="border-2 border-sky-100  p-2 h-12 rounded-lg mt-4 hover:text-white hover:bg-sky-400" required />
                    </div>
                    <p className="my-4">Already Have Account? <Link className="text-blue-600" to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;