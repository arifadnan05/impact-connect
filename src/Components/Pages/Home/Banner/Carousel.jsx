
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide img={'https://avenica.com/wp-content/uploads/2021/12/volunteer-blog-photo-scaled.jpg'} header={'Find Volunteer From Hare'}></Slide></SwiperSlide>
        <SwiperSlide><Slide img={'https://static.jobscan.co/blog/uploads/Volunteers-working-together-1.jpg'} header={'Find Job From Hare'}></Slide></SwiperSlide>
        <SwiperSlide><Slide img={'https://t4.ftcdn.net/jpg/06/50/38/07/360_F_650380719_otsngBrQUanLDCeW5cUNIg8uS9s9HxBV.jpg'} header={'Make Happy Everyone'}></Slide></SwiperSlide>
      
      </Swiper>
    </>
  );
}

