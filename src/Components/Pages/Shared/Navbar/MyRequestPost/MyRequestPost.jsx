import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../../firebase/Provider/AuthProvider";
import Empty from "../../../Empty/Empty";

const MyRequestPost = () => {
  const [requestJob, setRequestJob] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `https://impact-connect-server.vercel.app/request-volunteer-job/${user?.email}`,
      { withCredentials: true }
    );
    setRequestJob(data);
  };

  const cancelRequestJob = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this job application",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(
            `https://impact-connect-server.vercel.app/request-job/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your request has been deleted.",
            icon: "success",
          });

          // Update the state by filtering out the canceled job
          setRequestJob(requestJob.filter((job) => job._id !== id));
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  if (requestJob.length < 1) {
    return (
      <Empty
        message={"Request job not found"}
        address={"/"}
        label={"Go To Home"}
      />
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
          </tr>
        </thead>
        <tbody>
          {requestJob.map((item) => (
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
                    <div className="font-bold">{item.post_title}</div>
                  </div>
                </div>
              </td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <th>
                <button
                  onClick={() => cancelRequestJob(item._id)}
                  className="btn btn-primary"
                >
                  Cancel
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRequestPost;
