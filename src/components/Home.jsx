import React from 'react'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination } from 'swiper'

const Home = () => {
  return (
    <>
      <section className="px-3 py-24 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white leading-10">Learn New Skills Online</h1>
            <p className="mb-8 leading-relaxed dark:text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <Link className="text-white bg-primary py-2 px-5 hover:bg-secondary rounded hover-effect">Get Started</Link>
              <Link className="ml-4 text-white bg-black hover:bg-primary dark:text-black dark:bg-gray-100 dark:hover:bg-gray-200 py-2 px-5 rounded hover-effect">Register</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="h-[500px] w-full" src="/home-hero.svg" alt="Home Hero" />
          </div>
        </div>
      </section>
      <section className="px-3 py-24 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl font-bold">Top Categories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="max-w-7xl mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={20} pagination={{clickable: true,}} modules={[Pagination]}>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="hover-effect hover:-translate-y-1 duration-300 ease-linear hover:text-white bg-slate-200 hover:bg-primary dark:bg-slate-300 dark:hover:bg-primary rounded max-w-[200px] text-center px-10 py-7 space-y-5">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="hover-effect hover:-translate-y-1 duration-300 ease-linear hover:text-white bg-slate-200 hover:bg-primary dark:bg-slate-300 dark:hover:bg-primary rounded max-w-[200px] text-center px-10 py-7 space-y-5">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="hover-effect hover:-translate-y-1 duration-300 ease-linear hover:text-white bg-slate-200 hover:bg-primary dark:bg-slate-300 dark:hover:bg-primary rounded max-w-[200px] text-center px-10 py-7 space-y-5">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="hover-effect hover:-translate-y-1 duration-300 ease-linear hover:text-white bg-slate-200 hover:bg-primary dark:bg-slate-300 dark:hover:bg-primary rounded max-w-[200px] text-center px-10 py-7 space-y-5">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="hover-effect hover:-translate-y-1 duration-300 ease-linear hover:text-white bg-slate-200 hover:bg-primary dark:bg-slate-300 dark:hover:bg-primary rounded max-w-[200px] text-center px-10 py-7 space-y-5">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="hover-effect hover:-translate-y-1 duration-300 ease-linear hover:text-white bg-slate-200 hover:bg-primary dark:bg-slate-300 dark:hover:bg-primary rounded max-w-[200px] text-center px-10 py-7 space-y-5">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
};

export default Home;