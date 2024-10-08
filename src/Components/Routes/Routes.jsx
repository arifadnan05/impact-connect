import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddVolunteer from "../Pages/Shared/Navbar/AddVolunteer/AddVolunteer";
import ManageMyPost from "../Pages/Shared/Navbar/MangeMyPost/ManageMyPost";
import MyRequestPost from "../Pages/Shared/Navbar/MyRequestPost/MyRequestPost";
import VolunteerNeedPostDetails from "../Pages/VolunteerNeedPostDetails/VolunteerNeedPostDetails";
import VolunteerNeeds from "../Pages/Home/VolunteerNeeds/VolunteerNeeds";
import BeAVolunteer from "../Pages/BeAVolunteer/BeAVolunteer";
import UpdateMyPost from "../Pages/Shared/Navbar/MangeMyPost/UpdateMyPost/UpdateMyPost";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://impact-connect-server.vercel.app/add-job-post')
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
                element: <PrivetRoutes><AddVolunteer></AddVolunteer></PrivetRoutes>
            },
            {
                path: '/manage-my-post/:email',
                element: <PrivetRoutes><ManageMyPost></ManageMyPost></PrivetRoutes>
                // loader: ({ params }) => fetch(`https://impact-connect-server.vercel.app/my-job-posts/${params.email}`)
            },
            {
                path: '/my-volunteer-request/:email',
                element: <PrivetRoutes><MyRequestPost></MyRequestPost></PrivetRoutes>
                // loader: ({ params }) => fetch(`https://impact-connect-server.vercel.app/request-volunteer-job/${params.email}`)
            },
            {
                path: '/need-volunteer',
                element: <VolunteerNeeds></VolunteerNeeds>,
                loader: () => fetch('https://impact-connect-server.vercel.app/all-job-post')
            },
            {
                path: '/volunteer-job-post-details/:id',
                element: <PrivetRoutes><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivetRoutes>,
                loader: ({ params }) => fetch(`https://impact-connect-server.vercel.app/add-job-post/${params.id}`)
            },
            {
                path: '/be-volunteer/:id',
                element: <BeAVolunteer></BeAVolunteer>,
                loader: ({ params }) => fetch(`https://impact-connect-server.vercel.app/add-job-post/${params.id}`)
            },
            {
                path: '/update-my-job-post/:id',
                element: <PrivetRoutes><UpdateMyPost></UpdateMyPost></PrivetRoutes>,
                loader: ({ params }) => fetch(`https://impact-connect-server.vercel.app/add-job-post/${params.id}`)
            }

        ],
    },
])
export default router;