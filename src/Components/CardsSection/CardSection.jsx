import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FortuneGames, OriginalGames, TopGames } from '../../utils/data';

export default function CardSection() {

  return (
    <section className="px-4 md:px-6 lg:px-10 max-w-screen-2xl mx-auto pb-5">
      <div className="max-w-screen-2xl">
        <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Original <span className='text-textcl'>Games</span></p></div>
          <div className='flex justify-end items-center relative h-8 mt-2'>
            <div className='relative flex justify-center items-center mr-6'>
              <button className='swiper-button-prev original-games-prev ml-2'></button>
              <button className='swiper-button-next original-games-next'></button>
            </div>
          </div></div>
        <Swiper
          className='bg-secondarycl px-2 py-2 rounded-md'
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
          }}
          slidesPerView={9}
          spaceBetween={10}
          loop={true}
          navigation={
            {
              nextEl: '.original-games-next',
              prevEl: '.original-games-prev',
            }}
          modules={[Autoplay, Navigation]}
        >
          {
            OriginalGames && OriginalGames.map((item) => (
              <SwiperSlide key={item.id} className='bg-secondarycl'>
                <img src={item.Image} alt="Wait For Internet" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="max-w-screen-2xl py-5">
        <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Top <span className='text-textcl'>Games</span></p></div>
          <div className='flex justify-end items-center relative h-8 mt-2'>
            <div className='relative flex justify-center items-center mr-6'>
              <button className='swiper-button-prev top-games-prev ml-2'></button>
              <button className='swiper-button-next top-games-next'></button>
            </div>
          </div></div>
        <Swiper
          className='bg-secondarycl px-2 py-2 rounded-md'
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
           breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
          }}
          slidesPerView={9}
          spaceBetween={10}
          loop={true}
          navigation={
            {
              nextEl: '.top-games-next',
              prevEl: '.top-games-prev',
            }}
          modules={[Autoplay, Navigation]}
        >
          {
            TopGames && TopGames.map((item) => (
              <SwiperSlide key={item.id} className='bg-secondarycl'>
                <img src={item.Image} alt="Wait For Internet" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="max-w-screen-2xl py-5">
        <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Fortune <span className='text-textcl'>Games</span></p></div>
          <div className='flex justify-end items-center relative h-8 mt-2'>
            <div className='relative flex justify-center items-center mr-6'>
              <button className='swiper-button-prev fortune-games-prev ml-2'></button>
              <button className='swiper-button-next fortune-games-next'></button>
            </div>
          </div></div>
        <Swiper
          className='bg-secondarycl px-2 py-2 rounded-md'
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
           breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
          }}
          slidesPerView={9}
          spaceBetween={10}
          loop={true}
          navigation={
            {
              nextEl: '.fortune-games-next',
              prevEl: '.fortune-games-prev',
            }}
          modules={[Autoplay, Navigation]}
        >
          {
            FortuneGames && FortuneGames.map((item) => (
              <SwiperSlide key={item.id} className='bg-secondarycl'>
                <img src={item.Image} alt="Wait For Internet" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}
