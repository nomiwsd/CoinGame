import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ColdGames, GameProviders, HitGames, HotGames, TVBetGames, livegames } from '../../utils/data';
import Payment1 from '../../assets/deposit (1).png';
import Payment2 from '../../assets/deposit (2).png';
import Payment3 from '../../assets/deposit (3).png';
import Payment4 from '../../assets/deposit (4).png';
import Payment5 from '../../assets/deposit (5).png';

export default function PaymentMethods() {
    return (
        <section className="px-4 md:px-6 lg:px-10 max-w-screen-2xl mx-auto pb-10">
            <div className='flex justify-center items-center'>
                <div className="bg-secondarycl rounded-md px-2 py-4 max-w-screen-lg">
                    <div className="flex flex-col md:flex-row  items-center gap-2">
                        <div>
                            <p className="text-base font-normal text-white text-center">Need cryptocurrency? Buy using a card.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                            <img src={Payment1} alt="Wait For Internet" className='w-16 h-10' />
                            <img src={Payment2} alt="Wait For Internet" className='w-16 h-10' />
                            <img src={Payment3} alt="Wait For Internet" className='w-16 h-10' />
                            <img src={Payment4} alt="Wait For Internet" className='w-16 h-10' />
                            <img src={Payment5} alt="Wait For Internet" className='w-16 h-10' />
                        </div>
                        <div>
                            <button className='bg-btncl text-white text-sm font-medium py-3 px-4 rounded-md'>Buy Cryptocurrency</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto py-5">
                <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Hit <span className='text-textcl'>Games</span></p></div>
                    <div className='flex justify-end items-center relative h-8 mt-2'>
                        <div className='relative flex justify-center items-center mr-6'>
                            <button className='swiper-button-prev hit-games-prev ml-2'></button>
                            <button className='swiper-button-next hit-games-next'></button>
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
                            nextEl: '.hit-games-next',
                            prevEl: '.hit-games-prev',
                        }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        HitGames && HitGames.map((item) => (
                            <SwiperSlide key={item.id} className='bg-secondarycl'>
                                <img src={item.Image} alt="Wait For Internet" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="max-w-screen-2xl mx-auto pb-5">
                <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Hot <span className='text-textcl'>Games</span></p></div>
                    <div className='flex justify-end items-center relative h-8 mt-2'>
                        <div className='relative flex justify-center items-center mr-6'>
                            <button className='swiper-button-prev hot-games-prev ml-2'></button>
                            <button className='swiper-button-next hot-games-next'></button>
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
                            nextEl: '.hot-games-next',
                            prevEl: '.hot-games-prev',
                        }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        HotGames && HotGames.map((item) => (
                            <SwiperSlide key={item.id} className='bg-secondarycl'>
                                <img src={item.Image} alt="Wait For Internet" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="max-w-screen-2xl mx-auto pb-5">
                <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Cold <span className='text-textcl'>Games</span></p></div>
                    <div className='flex justify-end items-center relative h-8 mt-2'>
                        <div className='relative flex justify-center items-center mr-6'>
                            <button className='swiper-button-prev cold-games-prev ml-2'></button>
                            <button className='swiper-button-next cold-games-next'></button>
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
                            nextEl: '.cold-games-next',
                            prevEl: '.cold-games-prev',
                        }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        ColdGames && ColdGames.map((item) => (
                            <SwiperSlide key={item.id} className='bg-secondarycl'>
                                <img src={item.Image} alt="Wait For Internet" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="max-w-screen-2xl mx-auto pb-5">
                <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Games <span className='text-textcl'>Providers</span></p></div>
                    <div className='flex justify-end items-center relative h-8 mt-2'>
                        <div className='relative flex justify-center items-center mr-6'>
                            <button className='swiper-button-prev provider-games-prev ml-2'></button>
                            <button className='swiper-button-next provider-games-next'></button>
                        </div>
                    </div></div>
                <Swiper
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
                            nextEl: '.provider-games-next',
                            prevEl: '.provider-games-prev',
                        }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        GameProviders && GameProviders.map((item) => (
                            <SwiperSlide key={item.id}
                                className='bg-secondarycl px-2 py-2 rounded-md'>
                                <img src={item.Image} alt="Wait For Internet" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="max-w-screen-2xl mx-auto pb-5">
                <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>Recomended <span className='text-textcl'>Live Games</span></p></div>
                    <div className='flex justify-end items-center relative h-8 mt-2'>
                        <div className='relative flex justify-center items-center mr-6'>
                            <button className='swiper-button-prev live-games-prev ml-2'></button>
                            <button className='swiper-button-next live-games-next'></button>
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
                            nextEl: '.live-games-next',
                            prevEl: '.live-games-prev',
                        }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        livegames && livegames.map((item) => (
                            <SwiperSlide key={item.id}
                                className='bg-secondarycl'>
                                <img src={item.Image} alt="Wait For Internet" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="max-w-screen-2xl mx-auto pb-5">
                <div className='flex justify-between'> <div className='flex justify-start'><p className='text-white text-sm font-medium'>TVBet <span className='text-textcl'>Games</span></p></div>
                    <div className='flex justify-end items-center relative h-8 mt-2'>
                        <div className='relative flex justify-center items-center mr-6'>
                            <button className='swiper-button-prev tvbet-games-prev  ml-2'></button>
                            <button className='swiper-button-next tvbet-games-next'></button>
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
                            nextEl: '.tvbet-games-next',
                            prevEl: '.tvbet-games-prev',
                        }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        TVBetGames && TVBetGames.map((item) => (
                            <SwiperSlide key={item.id}
                                className='bg-secondarycl'>
                                <img src={item.Image} alt="Wait For Internet" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
