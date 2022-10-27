import React from 'react'
import { FaChartBar, FaClock, FaFileAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

  const {title, slug, thumbnail, instructor, instructorId, instructorPhoto, rating, review, lessons, regularPrice, salePrice, category, categoryId, language, duration, level, totalEnrolled, courseId} = course;

  return (
    <Link to={`/course/${slug}`}>
      <div className="text-black dark:text-white max-w-[320px] hover-effect">
        <img className="rounded-t" src={thumbnail} alt={instructor} />
        <div className="p-5 space-y-5 rounded-b border-x border-b hover:border-primary dark:border-white/10 dark:hover:border-primary">
          <Rating readonly placeholderRating={`${rating}`} emptySymbol= {<FaStar className="text-black dark:text-white" />} placeholderSymbol= {<FaStar className="text-primary" />}/>
          <h3>{title}</h3>
          <div className="flex flex-wrap gap-5">
            <small className="flex items-center gap-1"><FaFileAlt />{lessons} Lessons</small>
            <small className="flex items-center gap-1"><FaClock />{duration} {duration == 1 ? 'Day' : 'Days'}</small>
            <small className="flex items-center gap-1"><FaChartBar />{level}</small>
          </div>
          <hr className="dark:border-white/10" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="h-8 rounded-full" src={instructorPhoto} alt={instructor} />
              <small>{instructor}</small>
            </div>
            <div>
              <p><strike>{salePrice || ''}</strike> {regularPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default CourseCard;