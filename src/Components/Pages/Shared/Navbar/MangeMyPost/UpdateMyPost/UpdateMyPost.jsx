import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../../../firebase/Provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateMyPost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const updatePost = useLoaderData();
    const { user } = useContext(AuthContext)
    const organizerEmail = user?.email;
    const OrganizerName = user?.displayName;
    const { thumbnailUrl, description, post_title, category, location, volunteers_number, deadline, _id } = updatePost;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const { thumbnailUrl, description, post_title, category, location, volunteers_number, deadline } = data;
        const modifyJobPost = { thumbnailUrl, description, post_title, category, location, volunteers_number, deadline, organizerEmail, OrganizerName }


        try {
            const { data } = await axios.put(`https://impact-connect-server.vercel.app/my-job-post/${_id}`, modifyJobPost)
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your post has been deleted.",
                    icon: "success"
                });
            }
        }
        catch (err) {
            console.log(err)
        }

    }





    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update {post_title} job post</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Post Title</label>
                        <input defaultValue={post_title} placeholder="Post title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("post_title", { required: true })} />
                        {errors.post_title && <span>This field is required</span>}
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Thumbnail URL</label>
                        <input defaultValue={thumbnailUrl} placeholder="Thumbnail URL" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("thumbnailUrl", { required: true })} />
                        {errors.thumbnailUrl && <span>This field is required</span>}
                    </div>

                    <div>
                        <label>Category</label>
                        <select defaultValue={category} {...register("category")} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="social service">Social service</option>
                            <option value="animal welfare">Animal welfare</option>
                        </select>
                    </div>
                    <div>
                        <label>Location</label>
                        <select defaultValue={location} {...register("location")} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <option value="Rangpur">Rangpur</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Mymensingh">Mymensingh</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Organizer Name</label>
                        <input defaultValue={OrganizerName} readOnly={true} placeholder="Organizer Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Organizer Email</label>
                        <input defaultValue={organizerEmail} readOnly={true} placeholder="Organizer Email" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">No. of volunteers needed</label>
                        <select defaultValue={volunteers_number} {...register("volunteers_number")} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <div defaultValue={deadline} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <DatePicker
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                    </div>

                </div>

                <div className="w-full mt-4">
                    <label className="text-gray-700 dark:text-gray-200">Post Description</label>
                    <textarea defaultValue={description} className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Post Description" {...register("description", { required: true })}></textarea>
                    {errors.description && <span>This field is required</span>}
                </div>
                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                </div>
            </form>
        </section>
    )
}

export default UpdateMyPost
