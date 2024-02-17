/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { CardSections, HeroSections } from '../../utils/data';
import { useSidebar } from '../Homepage/SidebarContext';
// import { useSidebar } from '../Homepage/SidebarContext';
export default function HeroSection() {
  const {sidebarOpen,msgbarOpen}=useSidebar();
  return (
    <section className='px-4 md:px-6 lg:px-10 pt-10 pb-5'>
      <div className=''>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          navigation={true}
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper relative px-2"
        >
          {HeroSections && HeroSections.map((item) => (
            <SwiperSlide key={item.id} className='bg-primarycl'>
              <img
                src={item.Image}
                alt="Your Image"
                className="object-cover w-full h-full rounded-md bg-primarycl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`bg-primarycl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-4 py-2 my-5 rounded-md ${sidebarOpen || msgbarOpen ? 'md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4':'md:grid-cols-2 lg:gird-cols-4 xl:grid-cols-4'}`}>
        {
          CardSections && CardSections.map((item) => (
            <div key={item.id} className={`flex justify-between items-center gap-4 bg-secondarycl px-4 py-4 rounded-2xl 
             ${sidebarOpen || msgbarOpen ? 'flex-col h-36':'flex-row h-28'}`}>
              <p className='text-sm font-normal text-white'>{item.title}</p>
              <img src={item.Image} alt="Wait for Internet" className='w-16 h-16 object-contain' />
            </div>
          ))
        }
      </div>
    </section>
  )
}
