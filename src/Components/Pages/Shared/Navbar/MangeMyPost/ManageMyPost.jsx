import { Link, useLoaderData } from "react-router-dom"

const ManageMyPost = () => {
  const myJobPost = useLoaderData();

  return (
    <div className="overflow-x-auto min-h-[60vh]">
      <table className="table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Volunteer Category</th>
            <th>Location</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            myJobPost.map(item => <tr key={item._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.thumbnailUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <Link to={`/volunteer-job-post-details/${item?._id}`}>
                      <div className="font-bold">{item.post_title}</div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <th>
                <button className="btn btn-primary">Update</button>
              </th>
              <th>
                <button className="btn btn-primary">Delete</button>
              </th>
            </tr>)
          }

        </tbody>

      </table>
    </div>
  )
}

export default ManageMyPost
