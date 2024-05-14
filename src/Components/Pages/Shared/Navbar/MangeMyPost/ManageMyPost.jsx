import axios from "axios";
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import Empty from "../../../Empty/Empty";

const ManageMyPost = () => {
  const myJobPost = useLoaderData();

  const handleDelete = async id => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this post",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/my-job-post/${id}`)
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
  if(myJobPost < 1){
    return <Empty message={'No Country Available'} address={'/'} label={'Go To Home'}></Empty>
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
                <Link to={`/update-my-job-post/${item?._id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>
              </th>
              <th>
                <button onClick={() => handleDelete(item._id)} className="btn btn-primary">Delete</button>
              </th>
            </tr>)
          }

        </tbody>

      </table>
    </div>
  )
}

export default ManageMyPost
