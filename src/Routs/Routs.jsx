
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import RootPage from "../RootPage/RootPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlog/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage></RootPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
          path:'/add-blog',
          element: <AddBlog></AddBlog>
        },
        {
          path:'/all-blogs',
          element: <AllBlogs></AllBlogs>
        },
        {
          path:'/blog-details/:id',
          element: <BlogDetails></BlogDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/single-blog/${params.id}`)
        }
      ]
    },
  ]);

  export default router;