import { useLoaderData } from "react-router-dom"

const MyRequestPost = () => {
  const requestJob = useLoaderData();


  return (
    <div className="overflow-x-auto min-h-[60vh]">
      <table className="table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Volunteer Category</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            requestJob.map(item => <tr key={item._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.thumbnailUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.post_title}</div>
                  </div>
                </div>
              </td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <th>
                <button className="btn btn-primary">Cancel</button>
              </th>
            </tr>)
          }

        </tbody>

      </table>
    </div>
  )
}

export default MyRequestPost
