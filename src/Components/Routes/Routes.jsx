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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/add-job-post')
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
                path: '/my-volunteer-request/:email',
                element: <MyRequestPost></MyRequestPost>,
                loader: ({ params }) => fetch(`http://localhost:5000/request-volunteer-job/${params.email}`)
            },
            {
                path: '/need-volunteer',
                element: <VolunteerNeeds></VolunteerNeeds>,
                loader: () => fetch('http://localhost:5000/all-job-post')
            },
            {
                path: '/volunteer-job-post-details/:id',
                element: <VolunteerNeedPostDetails></VolunteerNeedPostDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/add-job-post/${params.id}`)
            },
            {
                path: '/be-volunteer/:id',
                element: <BeAVolunteer></BeAVolunteer>,
                loader: ({ params }) => fetch(`http://localhost:5000/add-job-post/${params.id}`)
            }

        ],
    },
])
export default router;