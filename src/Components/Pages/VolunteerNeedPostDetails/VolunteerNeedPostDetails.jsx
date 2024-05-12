import { useLoaderData } from "react-router-dom"

const VolunteerNeedPostDetails = () => {
  const jobPost = useLoaderData();
  const { post_title, thumbnailUrl, description, category } = jobPost
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border">
      <div className="w-1/2 border flex items-center">
        <figure><img className="rounded-xl" src={thumbnailUrl} alt="Album" /></figure>
      </div>
      <div className="card-body w-1/2 flex items-start">
        <h2 className="card-title">{post_title}</h2>
        <p>Volunteer Category : {category}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Be a Volunteer</button>
        </div>
      </div>
    </div>
  )
}

export default VolunteerNeedPostDetails
