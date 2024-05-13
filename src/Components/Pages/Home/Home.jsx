import { Link, useLoaderData } from 'react-router-dom'
import Carousel from './Banner/Carousel'
import HomeJobPost from './HomeJobPost/HomeJobPost';
import Contact from './Contact/Contact';
import OurProgram from './OurProgram/OurProgram';

const Home = () => {
  const card = useLoaderData();
  const jobPost = card.slice(0, 6);
  return (
    <div>
      <Carousel></Carousel>
      <div className='mt-28 flex flex-col items-center space-y-10'>
        <h1 className='text-3xl'>Join Us as a Volunteer Making a Difference Together</h1>
        <p className='text-center w-[70%] text-lg leading-8'>Looking for a way to give back to your community? Join us as a volunteer! Whether you have a little or a lot of time to spare, your contribution can make a real difference in the lives of others. Get involved today!</p>
      </div>
      <div className='grid grid-cols-3 gap-8 mt-28'>
        {
          jobPost.map(item => <HomeJobPost key={item._id} item={item}></HomeJobPost>)
        }

      </div>
      <div className='flex justify-center my-10'>
        <Link to='/need-volunteer'>
          <button className='btn btn-primary px-8'>See All</button>
        </Link>
      </div>
        <div className='my-10'>
          <OurProgram></OurProgram>
        </div>
      <div className='mt-24'>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default Home
