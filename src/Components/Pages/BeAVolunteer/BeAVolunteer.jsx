import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../../firebase/Provider/AuthProvider";

const BeAVolunteer = () => {

    const volunteer = useLoaderData();
    const { post_title, thumbnailUrl, category, location, volunteers_number, description, organizerEmail, OrganizerName, deadline } = volunteer;
    const { user } = useContext(AuthContext)
    const loggedInUserName = user.displayName;
    const loggedInUserEmail = user.email;



    const handleRequestVolunteer = e => {
        e.preventDefault();
        const suggestion = e.target.suggestion.value;
        const status = e.target.status.value;
        const requestVolunteer = {loggedInUserEmail, loggedInUserName, post_title, thumbnailUrl, category, location, volunteers_number, description, organizerEmail, OrganizerName, deadline, suggestion, status}
        console.log(requestVolunteer)
    }





    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Volunteer Job post</h2>

            <form onSubmit={handleRequestVolunteer}>
                <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Post Title</label>
                        <input defaultValue={post_title} readOnly={true} placeholder="Post title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Thumbnail URL</label>
                        <input defaultValue={thumbnailUrl} readOnly={true} placeholder="Thumbnail URL" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                    </div>


                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Location</label>
                        <input defaultValue={location} readOnly={true} placeholder="Location" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Category</label>
                        <input defaultValue={category} readOnly={true} placeholder="Category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Organizer Name</label>
                        <input defaultValue={OrganizerName} readOnly={true} placeholder="Organizer Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">No. of volunteers needed</label>
                        <input defaultValue={volunteers_number} readOnly={true} placeholder="No. of volunteers needed" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Deadline</label>
                        <input defaultValue={deadline} readOnly={true} placeholder="Deadline" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Organizer Email</label>
                        <input defaultValue={organizerEmail} readOnly={true} placeholder="Organizer Email" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Volunteer Name</label>
                        <input defaultValue={loggedInUserName} readOnly={true} placeholder="Volunteer Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Volunteer Email</label>
                        <input defaultValue={loggedInUserEmail} readOnly={true} placeholder="Volunteer Email" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Suggestion</label>
                        <input name="suggestion" placeholder="Please write your suggestion inspire to us" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Status</label>
                        <input name='status' readOnly={true} defaultValue={'Requested'} placeholder="Status" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>





                </div>

                <div className="w-full mt-4">
                    <label className="text-gray-700 dark:text-gray-200">Post Description</label>
                    <textarea defaultValue={description} readOnly={true} className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Post Description" ></textarea>

                </div>
                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Request</button>
                </div>
            </form>
        </section>
    )
}

export default BeAVolunteer
