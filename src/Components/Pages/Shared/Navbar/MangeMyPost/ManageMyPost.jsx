import axios from "axios";
import Swal from "sweetalert2";
import Empty from "../../../Empty/Empty";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../firebase/Provider/AuthProvider";
import { Link } from "react-router-dom";

const ManageMyPost = () => {
  const [myJobPost, setMyJobPost] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `https://impact-connect-server.vercel.app/my-job-posts/${user?.email}`,
      { withCredentials: true }
    );
    setMyJobPost(data);
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this post",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(
            `https://impact-connect-server.vercel.app/my-job-post/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });

          // Update the state by filtering out the deleted post
          setMyJobPost(myJobPost.filter((post) => post._id !== id));
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  if (myJobPost.length < 1) {
    return (
      <Empty message={"Post not found"} address={"/"} label={"Go To Home"} />
    );
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
          {myJobPost.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.thumbnailUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
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
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyPost;
