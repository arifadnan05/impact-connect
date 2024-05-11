import { useState } from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

const AddVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate)
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Volunteer Job post</h2>

      <form>
        <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Post Title</label>
            <input placeholder="Post title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Thumbnail URL</label>
            <input placeholder="Thumbnail URL" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
          </div>

          <div>
            <label>Category</label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social service">Social service</option>
              <option value="animal welfare">Animal welfare</option>
            </select>
          </div>
          <div>
            <label>Location</label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
              <option value="Rangpur">Rangpur</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Organizer Name</label>
            <input placeholder="Organizer Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Organizer Email</label>
            <input placeholder="Organizer Email" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">No. of volunteers needed</label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="mt-4">
            <div className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
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
          <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Post Description"></textarea>
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Post</button>
        </div>
      </form>
    </section>
  )
}

export default AddVolunteer
