import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaGrip } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom"

const VolunteerNeeds = () => {
  const jobPost = useLoaderData();


  const [layOut, setLayOut] = useState('layout1')

  const changeLayout = (newLayout) => {
    setLayOut(newLayout);
  }

  return (
    <div>
      <div>
        <div className="flex justify-end my-10">
          <button className="btn" onClick={() => changeLayout('layout1')}><span className="text-4xl"><FaGrip /></span></button>
          <button className="btn" onClick={() => changeLayout('layout2')}><span className="text-4xl"><FaBars /></span></button>
        </div>


        {layOut === 'layout1' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              jobPost.map(item => <div key={item._id} className="card h-[460px] bg-base-100 shadow-xl">
                <figure><img src={item.thumbnailUrl} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.post_title}</h2>
                  <p>Volunteer Category: <span className="font-bold">{item.category}</span></p>
                  <p>Last Application Date: {new Date(item.deadline).toLocaleDateString()}</p>
                  <div className="card-actions justify-center">
                    <Link to={`/volunteer-job-post-details/${item._id}`}>
                      <button className="btn btn-primary">View details</button>
                    </Link>
                  </div>
                </div>
              </div>)
            }
          </div>
        )}

        {layOut === 'layout2' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              jobPost.map(item => <div key={item._id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{item.post_title}</h2>
                  <p>Volunteer Category: <span className="font-bold">{item.category}</span></p>
                  <p>Last Application Date: {new Date(item.deadline).toLocaleDateString()}</p>
                  <div className="card-actions justify-start">
                    <Link to={`/volunteer-job-post-details/${item._id}`}>
                      <button className="btn btn-primary">View details</button>
                    </Link>
                  </div>
                </div>
              </div>)
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default VolunteerNeeds
