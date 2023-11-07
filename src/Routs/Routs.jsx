
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import RootPage from "../RootPage/RootPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlog/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import WishLists from "../Pages/WishList/WishLists";
import PrivetRout from "./PrivetRouts";
import FeatureBlog from "../Pages/FeatureBlog/FeatureBlog";

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
          element: <PrivetRout><AddBlog></AddBlog></PrivetRout>
        },
        {
          path:'/all-blogs',
          element: <AllBlogs></AllBlogs>
        },
        {
          path:'/blog-details/:id',
          element: <PrivetRout><BlogDetails></BlogDetails></PrivetRout>,
          loader: ({params}) => fetch(`http://localhost:5000/single-blog/${params.id}`)
        },
        {
          path: '/withlists',
          element: <PrivetRout><WishLists></WishLists></PrivetRout>
        },
        {
          path:'/features-blog',
          element: <FeatureBlog></FeatureBlog>,
          loader: () => fetch('http://localhost:5000/sort-Blog')
        }
      ]
    },
  ]);

  export default router;