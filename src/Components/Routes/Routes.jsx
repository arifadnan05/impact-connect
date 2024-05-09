import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddVolunteer from "../Pages/Shared/Navbar/AddVolunteer/AddVolunteer";
import ManageMyPost from "../Pages/Shared/Navbar/MangeMyPost/ManageMyPost";
import MyRequestPost from "../Pages/Shared/Navbar/MyRequestPost/MyRequestPost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-volunteer',
                element: <AddVolunteer></AddVolunteer>
            },
            {
                path: '/manage-my-post',
                element: <ManageMyPost></ManageMyPost>
            },
            {
                path: '/my-request-post',
                element: <MyRequestPost></MyRequestPost>
            }
        ]
    }
])
export default router;