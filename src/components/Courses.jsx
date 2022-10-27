import React, { useContext, useEffect, useState } from 'react'
import { CoursesContext } from '../contexts/DataContext';
import CourseCard from './CourseCard';

const Courses = () => {
  
  // Getting data using CoursesContext
  const {allCourses, categories} = useContext(CoursesContext);

  // Fetched courses load inititally, then when click on the category name getting the particualt courses
  const [courses, setCourses] = useState(allCourses);

  // Category state
  const [category, setCategory] = useState('');

  // Getting courses by category
  const coursesByCategory = particularCategory => {
    setCategory(particularCategory);
  };

  // Fetching data by particualr category
  useEffect(() => {
    if (category) {
      fetch(`https://api-learnwithrasel.vercel.app/coursesbycategory/${category}`)
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(error => console.log(error));
    } else {
      fetch('https://api-learnwithrasel.vercel.app/courses')
      .then(res => res.json())
      .then(data => setCourses(data.data))
      .catch(error => console.log(error));
    }
  },[category]);

  return (
    <section className="px-3 py-32 bg-slate-50 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto text-center space-y-3 dark:text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold">Our Courses</h2>
        <p className="pt-2 text-lg">20,000+ unique online course list designs</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 max-w-7xl mx-auto py-10 relative">
        <aside className="w-fit min-w-[320px] h-fit mx-auto p-6 dark:text-white border dark:border-white/10 rounded-md lg:sticky lg:top-[90px] text-center lg:text-left">
          <nav className="space-y-8 text-sm">
            <div className="space-y-10">
              <h2 className="text-xl font-semibold tracking-widest uppercase">Categories</h2>
              <div className="text-lg flex flex-col space-y-5">
                {categories.map(category => <p onClick={() => coursesByCategory(category)} key={categories.indexOf(category)} className="cursor-pointer">{category}</p>)}
              </div>
            </div>
          </nav>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {courses.map(course => <CourseCard key={course.courseId} course={course} />)}
        </div>
      </div>
    </section>
  )
};

export default Courses;