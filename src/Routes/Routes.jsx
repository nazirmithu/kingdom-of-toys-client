import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleToyDetails from "./SingleToyDetails";
import SingleToy from "./SingleToy";
import AddToys from "./AddToys";
import AllToys from "./AllToys/AllToys";
import MyToys from "./MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToys from "../pages/UpdateMyToys/UpdateMyToys";
import ReactTabs from "../pages/Home/Tabs/ReactTabs";

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
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/alltoys')
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: '/singletoy',
        element: <SingleToy></SingleToy>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: '/addtoys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/updatetoys/:id',
        element: <PrivateRoute><UpdateMyToys></UpdateMyToys></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: '/reacttabs',
        element: <ReactTabs></ReactTabs>
      }
    ]
  },
]);

export default router;