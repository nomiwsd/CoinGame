import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { CardSections, HeroSections } from '../../utils/data';
export default function HeroSection() {
  return (
    <section className='px-4 md:px-6 lg:px-10 max-w-screen-2xl mx-auto pt-10 pb-5'>
      <div className='max-w-screen-2xl'>
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
      <div className='bg-primarycl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-2xl px-4 py-2 my-5 rounded-md'>
        {
          CardSections && CardSections.map((item) => (
            <div key={item.id} className='flex justify-between items-center gap-4 bg-secondarycl px-4 py-4 rounded-2xl h-28'>
              <p className='text-sm font-normal text-white'>{item.title}</p>
              <img src={item.Image} alt="Wait for Internet" className='w-24 h-28 object-contain'/>
            </div>
          ))
        }
      </div>
    </section>
  )
}
