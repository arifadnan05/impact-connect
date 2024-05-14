import axios from "axios";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const MyRequestPost = () => {
  const requestJob = useLoaderData();
  const cancelRequestJob = async id => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this job application",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/request-job/${id}`)
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success"
          });
        }
      });


    }
    catch (err) {
      console.log(err.message)
      console.log(err.message)

    }
  }

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
                <button onClick={() => cancelRequestJob(item._id)} className="btn btn-primary">Cancel</button>
              </th>
            </tr>)
          }

        </tbody>

      </table>
    </div>
  )
}

export default MyRequestPost
