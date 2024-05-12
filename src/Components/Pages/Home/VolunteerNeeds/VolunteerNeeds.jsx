import { Link, useLoaderData } from "react-router-dom"

const VolunteerNeeds = () => {
  const jobPost = useLoaderData();
  // const {thumbnailUrl, post_title, category, deadline, _id} = jobPost;
  return (
    <div className="grid grid-cols-3 gap-8">
      {
        jobPost.map(item => <div key={item._id} className="card h-[460px] bg-base-100 shadow-xl">
          <figure><img src={item.thumbnailUrl} /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.post_title}</h2>
            <p>{item.category}</p>
            <p>{item.deadline}</p>
            <div className="card-actions justify-center">
              <Link to={`/volunteer-job-post-details/${item._id}`}>
                <button className="btn btn-primary">View details</button>
              </Link>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default VolunteerNeeds
