import { Link } from "react-router-dom";

const HomeJobPost = ({ item }) => {
    const { post_title, thumbnailUrl, category, deadline, _id } = item;
    // console.log(deadline)
    return (
        <div>
            <div className="card h-[460px] bg-base-100 shadow-xl">
                <figure><img src={thumbnailUrl} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{post_title}</h2>
                    <p>{category}</p>
                    <p>{deadline}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/volunteer-job-post-details/${_id}`}>
                            <button className="btn btn-primary">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeJobPost
