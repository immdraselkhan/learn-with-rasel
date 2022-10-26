import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaFileAlt, FaClock, FaChartBar, FaQuoteLeft, FaQuoteRight, FaVideo, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'
import Rating from 'react-rating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const Home = () => {
  return (
    <>
      <section className="px-3 py-24 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center">
          <div className="text-center md:text-left flex flex-col gap-5 lg:flex-grow lg:mr-18 xl:mr-20 md:w-1/2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black dark:text-white leading-[60px]">Learn New Skills Online</h1>
            <p className="text-lg dark:text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center md:justify-start">
              <Link className="text-white bg-primary py-2 px-5 hover:bg-secondary rounded hover-effect">Get Started</Link>
              <Link className="text-white bg-black hover:bg-primary dark:text-black dark:bg-gray-100 dark:hover:bg-gray-200 py-2 px-5 ml-4 rounded hover-effect">Register</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="h-[500px] w-full" src="/home-hero.svg" alt="Home Hero" />
          </div>
        </div>
      </section>

      <section className="px-3 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">Top Categories</h2>
          <p className="pt-2 text-lg">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="max-w-7xl mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={25} pagination={{clickable: true}} modules={[Pagination]}>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>1 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
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

      <section className="px-3 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">Our Most Popular Courses</h2>
          <p className="pt-2 text-lg">20,000+ unique online course list designs</p>
        </div>
        <div className="max-w-7xl mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={25} pagination={{clickable: true}} modules={[Pagination]}>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-black dark:text-white max-w-[300px] hover-effect">
                <img className="rounded-t" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg" alt="" />
                <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
                  <Rating
                    readonly
                    placeholderRating={2.7}
                    emptySymbol= {<FaStar className="text-black dark:text-white" />}
                    placeholderSymbol= {<FaStar className="text-primary" />}
                  />
                  <h3>Learn Figma - UI/UX Design Essential Training</h3>
                  <div className="flex gap-5">
                    <small className="flex items-center gap-1"><FaFileAlt />5 Lessons</small>
                    <small className="flex items-center gap-1"><FaClock />15 Days</small>
                    <small className="flex items-center gap-1"><FaChartBar />All Levels</small>
                  </div>
                  <hr className="dark:border-white/10" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="h-8 rounded-full" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg" alt="" />
                      <small>Ali Tufan</small>
                    </div>
                    <div>
                      <p><strike>$80</strike> $40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-black dark:text-white max-w-[300px] hover-effect">
                <img className="rounded-t" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg" alt="" />
                <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
                  <Rating
                    readonly
                    placeholderRating={3.3}
                    emptySymbol= {<FaStar className="text-black dark:text-white" />}
                    placeholderSymbol= {<FaStar className="text-primary" />}
                  />
                  <h3>Learn Figma - UI/UX Design Essential Training</h3>
                  <div className="flex gap-5">
                    <small className="flex items-center gap-1"><FaFileAlt />5 Lessons</small>
                    <small className="flex items-center gap-1"><FaClock />15 Days</small>
                    <small className="flex items-center gap-1"><FaChartBar />All Levels</small>
                  </div>
                  <hr className="dark:border-white/10" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="h-8 rounded-full" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg" alt="" />
                      <small>Ali Tufan</small>
                    </div>
                    <div>
                      <p><strike>$80</strike> $40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-black dark:text-white max-w-[300px] hover-effect">
                <img className="rounded-t" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg" alt="" />
                <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
                  <Rating
                    readonly
                    placeholderRating={4.3}
                    emptySymbol= {<FaStar className="text-black dark:text-white" />}
                    placeholderSymbol= {<FaStar className="text-primary" />}
                  />
                  <h3>Learn Figma - UI/UX Design Essential Training</h3>
                  <div className="flex gap-5">
                    <small className="flex items-center gap-1"><FaFileAlt />5 Lessons</small>
                    <small className="flex items-center gap-1"><FaClock />15 Days</small>
                    <small className="flex items-center gap-1"><FaChartBar />All Levels</small>
                  </div>
                  <hr className="dark:border-white/10" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="h-8 rounded-full" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg" alt="" />
                      <small>Ali Tufan</small>
                    </div>
                    <div>
                      <p><strike>$80</strike> $40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-black dark:text-white max-w-[300px] hover-effect">
                <img className="rounded-t" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg" alt="" />
                <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
                  <Rating
                    readonly
                    placeholderRating={4.6}
                    emptySymbol= {<FaStar className="text-black dark:text-white" />}
                    placeholderSymbol= {<FaStar className="text-primary" />}
                  />
                  <h3>Learn Figma - UI/UX Design Essential Training</h3>
                  <div className="flex gap-5">
                    <small className="flex items-center gap-1"><FaFileAlt />5 Lessons</small>
                    <small className="flex items-center gap-1"><FaClock />15 Days</small>
                    <small className="flex items-center gap-1"><FaChartBar />All Levels</small>
                  </div>
                  <hr className="dark:border-white/10" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="h-8 rounded-full" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg" alt="" />
                      <small>Ali Tufan</small>
                    </div>
                    <div>
                      <p><strike>$80</strike> $40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-black dark:text-white max-w-[300px] hover-effect">
                <img className="rounded-t" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg" alt="" />
                <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
                  <Rating
                    readonly
                    placeholderRating={4.8}
                    emptySymbol= {<FaStar className="text-black dark:text-white" />}
                    placeholderSymbol= {<FaStar className="text-primary" />}
                  />
                  <h3>Learn Figma - UI/UX Design Essential Training</h3>
                  <div className="flex gap-5">
                    <small className="flex items-center gap-1"><FaFileAlt />5 Lessons</small>
                    <small className="flex items-center gap-1"><FaClock />15 Days</small>
                    <small className="flex items-center gap-1"><FaChartBar />All Levels</small>
                  </div>
                  <hr className="dark:border-white/10" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="h-8 rounded-full" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg" alt="" />
                      <small>Ali Tufan</small>
                    </div>
                    <div>
                      <p><strike>$80</strike> $40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="px-3 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">Why Learn With Our Courses?</h2>
          <p className="pt-2 text-lg">20,000+ unique online course list designs</p>
        </div>
        <div className="max-w-sm md:max-w-5xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          <div className="p-8 text-center dark:text-white rounded-lg space-y-5 border hover:border-primary dark:border-white/10 dark:hover:border-secondary hover-effect">
            <div className="p-5 text-3xl text-white bg-primary w-fit rounded-full mx-auto">
              <FaVideo />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">01. Learn</h3>
              <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
            </div>
          </div>
          <div className="p-8 text-center dark:text-white rounded-lg space-y-5 border hover:border-primary dark:border-white/10 dark:hover:border-secondary hover-effect">
            <div className="p-5 text-3xl text-white bg-primary w-fit rounded-full mx-auto">
              <FaGraduationCap />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">02. Graduate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
            </div>
          </div>
          <div className="p-8 text-center dark:text-white rounded-lg space-y-5 border hover:border-primary dark:border-white/10 dark:hover:border-secondary hover-effect">
            <div className="p-5 text-3xl text-white bg-primary w-fit rounded-full mx-auto">
              <FaLaptopCode />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">03. Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pt-5 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">What Our Students Saying</h2>
          <p className="pt-2 text-lg">20,000+ unique online course list designs</p>
        </div>
        <div className="max-w-[1250px] mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={25} pagination={{clickable: true}} modules={[Pagination]}>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote class="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?1" alt="" />
                  <div class="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p class="mt-1 text-lg font-medium dark:text-white">Paul Starr</p>
                  </div>
                </div>
                <p class="mt-4 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.</p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote class="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?1" alt="" />
                  <div class="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p class="mt-1 text-lg font-medium dark:text-white">Paul Starr</p>
                  </div>
                </div>
                <p class="mt-4 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.</p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote class="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?1" alt="" />
                  <div class="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p class="mt-1 text-lg font-medium dark:text-white">Paul Starr</p>
                  </div>
                </div>
                <p class="mt-4 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.</p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote class="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div class="flex items-center">
                  <img class="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?1" alt="" />
                  <div class="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p class="mt-1 text-lg font-medium dark:text-white">Paul Starr</p>
                  </div>
                </div>
                <p class="mt-4 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.</p>
              </blockquote>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="px-3 py-14 bg-primary dark:bg-[#0B1120] border-t dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <h1 className="text-3xl font-bold text-center md:text-left">
              <span className="text-white block mb-3">Join more than 10 million</span>
              <span className="dark:text-primary">learners worldwide</span>
            </h1>
            <button className="hover-effect px-8 py-3 text-lg font-semibold rounded-lg bg-black hover:bg-black/70 dark:bg-primary dark:hover:bg-secondary text-gray-50">Let's Start Learning</button>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;