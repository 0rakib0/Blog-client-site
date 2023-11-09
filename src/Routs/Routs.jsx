
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
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import Error from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <RootPage></RootPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/add-blog',
        element: <PrivetRout><AddBlog></AddBlog></PrivetRout>
      },
      {
        path: '/all-blogs',
        element: <AllBlogs></AllBlogs>
      },
      {
        path: '/blog-details/:id',
        element: <PrivetRout><BlogDetails></BlogDetails></PrivetRout>,
        loader: ({ params }) => fetch(`https://b8a11-server-side-0rakib0.vercel.app/details_blog/${params.id}`)
      },
      {
        path: '/withlists',
        element: <PrivetRout><WishLists></WishLists></PrivetRout>
      },
      {
        path: '/features-blog',
        element: <FeatureBlog></FeatureBlog>,
        loader: () => fetch('https://b8a11-server-side-0rakib0.vercel.app/sort-Blog')
      },
      {
        path: '/updateblog/:id',
        element: <PrivetRout> <UpdateBlog></UpdateBlog> </PrivetRout>,
        loader: ({ params }) => fetch(`https://b8a11-server-side-0rakib0.vercel.app/details_blog/${params.id}`)
      }
    ]
  },
]);

// details_blog/

export default router;