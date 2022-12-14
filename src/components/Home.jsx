import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaFileAlt, FaClock, FaChartBar, FaVideo, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'
import Rating from 'react-rating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { CoursesContext } from '../contexts/DataContext'

const Home = () => {

  // Getting data using CoursesContext
  const {popularCourses} = useContext(CoursesContext);

  return (
    <>
      <section className="px-3 py-24 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center">
          <div className="text-center md:text-left flex flex-col gap-5 lg:flex-grow lg:mr-18 xl:mr-20 md:w-1/2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black dark:text-white leading-[60px]">Learn New Skills Online</h1>
            <p className="text-lg dark:text-white">Move your creative journey forward without putting life on hold. LearningThrive's short online classes help you find inspiration that fits your routine.</p>
            <div className="flex justify-center md:justify-start">
              <Link to="/courses" className="text-white bg-primary py-2 px-5 hover:bg-secondary rounded hover-effect">Get Started</Link>
              <Link to="/register" className="text-white bg-black hover:bg-primary dark:text-black dark:bg-gray-100 dark:hover:bg-gray-200 py-2 px-5 ml-4 rounded hover-effect">Register</Link>
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
          <p className="pt-2 text-lg">Popular courses categories</p>
        </div>
        <div className="max-w-7xl mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={25} pagination={{clickable: true}} modules={[Pagination]}>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>2 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Graphics Design</p>
                <small>3 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Web Desigm & Developmenmt</p>
                <small>5 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Digital Marketing</p>
                <small>4 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Business Development</p>
                <small>5 Course</small>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <div className="text-center hover:text-white bg-gray-100 hover:bg-primary dark:hover:bg-primary rounded-lg max-w-[200px] px-10 py-7 space-y-5 hover-effect">
                <div className="p-5 rounded-full bg-white w-fit mx-auto">
                  <img className="" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg" alt="" />
                </div>
                <p className="font-bold">Video Photography</p>
                <small>3 Course</small>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="px-3 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">Our Most Popular Courses</h2>
          <p className="pt-2 text-lg">Our teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you.</p>
        </div>
        <div className="max-w-7xl mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={25} pagination={{clickable: true}} modules={[Pagination]}>
            {popularCourses.map(course => 
            <SwiperSlide key={course.courseId} className="w-auto mt-1 pb-12">
              <Link to={`/course/${course.slug}`}>
                <div className="text-black dark:text-white max-w-[300px] hover-effect">
                  <img className="rounded-t" src={course?.thumbnail} alt={course?.instructor} />
                  <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
                    <Rating readonly placeholderRating={`${course?.rating}`} emptySymbol= {<FaStar className="text-black dark:text-white" />} placeholderSymbol= {<FaStar className="text-primary" />}/>
                    <h3>{course?.title}</h3>
                    <div className="flex gap-5">
                      <small className="flex items-center gap-1"><FaFileAlt />{course?.lessons} Lessons</small>
                      <small className="flex items-center gap-1"><FaClock />{course?.duration} {course?.duration == 1 ? 'Day' : 'Days'}</small>
                      <small className="flex items-center gap-1"><FaChartBar />{course?.level}</small>
                    </div>
                    <hr className="dark:border-white/10" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img className="h-8 rounded-full" src={course?.instructorPhoto} alt={course?.instructor} />
                        <small>{course?.instructor}</small>
                      </div>
                      <div>
                        <p><strike>{course?.salePrice || ''}</strike> {course?.regularPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>)}
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
              <p>Propel your career, get a degree, or expand your knowledge at any level.</p>
            </div>
          </div>
          <div className="p-8 text-center dark:text-white rounded-lg space-y-5 border hover:border-primary dark:border-white/10 dark:hover:border-secondary hover-effect">
            <div className="p-5 text-3xl text-white bg-primary w-fit rounded-full mx-auto">
              <FaGraduationCap />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">02. Graduate</h3>
              <p>Upskill employees and build a culture of learning.</p>
            </div>
          </div>
          <div className="p-8 text-center dark:text-white rounded-lg space-y-5 border hover:border-primary dark:border-white/10 dark:hover:border-secondary hover-effect">
            <div className="p-5 text-3xl text-white bg-primary w-fit rounded-full mx-auto">
              <FaLaptopCode />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">03. Work</h3>
              <p>Upskill employees and build a culture of learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pt-5 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">What Our Students Saying</h2>
          <p className="pt-2 text-lg">Over thousand lives have been impacted by us, and they continue to inspire us every day.</p>
        </div>
        <div className="max-w-[1250px] mx-auto py-10">
          <Swiper slidesPerView='auto' spaceBetween={25} pagination={{clickable: true}} modules={[Pagination]}>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote className="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?1" alt="" />
                  <div className="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p className="mt-1 text-lg font-medium dark:text-white">Paul Starr</p>
                  </div>
                </div>
                <p className="mt-4 dark:text-white">???I was able to prove to potential employers that I have a solid understanding of computers and hardware???and started to receive real, viable job offers.???</p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote className="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?2" alt="" />
                  <div className="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p className="mt-1 text-lg font-medium dark:text-white">Justin Mullin</p>
                  </div>
                </div>
                <p className="mt-4 dark:text-white">Level was challenging yet manageable, great quality content, adaptable length, and good flexibility. The community was also very friendly and helpful. I am so happy I chose this course, and would recommend it to others!</p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote className="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?3" alt="" />
                  <div className="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p className="mt-1 text-lg font-medium dark:text-white">Liakot Ali</p>
                  </div>
                </div>
                <p className="mt-4 dark:text-white">The course was clearly organized with good videos, good readings and book references. The teachers are academic researchers with experience in the field and also experienced teachers. I enjoyed the course very much.</p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide className="w-auto mt-1 pb-12">
              <blockquote className="p-8 border hover:border-primary dark:border-white/10 dark:hover:border-secondary max-w-[400px] rounded-lg hover-effect">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full" src="https://source.unsplash.com/50x50/?portrait?4" alt="" />
                  <div className="ml-4">
                    <Rating
                      readonly
                      placeholderRating={2.7}
                      emptySymbol= {<FaStar className="text-black dark:text-white" />}
                      placeholderSymbol= {<FaStar className="text-primary" />}
                    />
                    <p className="mt-1 text-lg font-medium dark:text-white">Cody Radney</p>
                  </div>
                </div>
                <p className="mt-4 dark:text-white">???Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.???</p>
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
            <Link to={'/courses'} className="hover-effect px-8 py-3 text-lg font-semibold rounded-lg bg-black hover:bg-black/70 dark:bg-primary dark:hover:bg-secondary text-gray-50">Let's Start Learning</Link>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;