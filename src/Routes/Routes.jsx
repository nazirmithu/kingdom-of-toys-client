import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import SingleToy from "./SingleToy";
import SingleToyDetails from "./SingleToyDetails";
import AddToys from "./AddToys";
import AllToys from "./AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/blogs',
          element: <Blogs></Blogs>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/alltoys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/alltoys')
        },
        {
          path:'/singletoy',
          element: <SingleToy></SingleToy>
        },
        {
          path:'/singletoydetails',
          element:<SingleToyDetails></SingleToyDetails>
        },
        {
        path: '/addtoys',
        element: <AddToys></AddToys>
        }
      ]
    },
  ]);

  export default router;