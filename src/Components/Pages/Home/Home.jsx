import { Link, useLoaderData } from 'react-router-dom'
import Carousel from './Banner/Carousel'
import HomeJobPost from './HomeJobPost/HomeJobPost';

const Home = () => {
  const card = useLoaderData();
  const jobPost = card.slice(0, 6);
  return (
    <div>
      <Carousel></Carousel>
      <div className='grid grid-cols-3 gap-8 mt-28'>
        {
          jobPost.map(item => <HomeJobPost key={item._id} item={item}></HomeJobPost>)
        }

      </div>
      <div className='flex justify-center my-10'>
        <Link to='/need-volunteer'>
          <button className='btn btn-primary'>See All</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
