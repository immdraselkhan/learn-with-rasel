import React from 'react'
import { FaStar, FaDownload } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf'

const ref = React.createRef();

const Course = () => {

  // Getting data using useLoaderData hook
  const course = useLoaderData();

  const {title, description, slug, thumbnail, instructor, instructorId, instructorPhoto, rating, review, lessons, regularPrice, salePrice, category, categoryId, language, duration, level, totalEnrolled, courseId} = course;

  return (
    <section className="px-3 py-24 text-gray-600 bg-slate-50 dark:bg-[#0B1120] body-font overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
            <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium my-4">{title}</h1>
            <div className="flex justify-between items-center mb-4">
              <a className="text-primary border-b-2 border-primary py-2 text-lg">Description</a>
              <Pdf targetRef={ref} filename="course-info.pdf">{({ toPdf }) => <FaDownload onClick={toPdf} className="text-2xl text-primary hover:text-secondary cursor-pointer" />}</Pdf>
            </div>
            <div ref={ref} className="dark:text-white" >
              <p className="leading-relaxed mb-4">{description}</p>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Instructor</span>
                <span className="ml-auto">{instructor}</span>
              </div>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Duration</span>
                <span className="ml-auto ">{duration}</span>
              </div>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Lessons</span>
                <span className="ml-auto ">{lessons}</span>
              </div>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Language</span>
                <span className="ml-auto ">{language}</span>
              </div>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Skill Level</span>
                <span className="ml-auto">{level}</span>
              </div>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Total Entrolled</span>
                <span className="ml-auto">{totalEnrolled}</span>
              </div>
              <div className="flex border-t border-gray-200 dark:border-white/10 py-2">
                <span>Rating</span>
                <span className="ml-auto"><Rating readonly placeholderRating={`${rating}`} emptySymbol= {<FaStar className="text-black dark:text-white" />} placeholderSymbol= {<FaStar className="text-primary" />}/></span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 dark:border-white/10 py-2">
                <span>Skill Level</span>
                <span className="ml-auto">{level}</span>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900"><strike>{salePrice || ''}</strike> {regularPrice}</span>
              <Link to={`/checkout/${slug}`} className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded hover-effect">Get Premium Access</Link>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg" src={thumbnail} />
        </div>
      </div>
    </section>
  )
};

export default Course;