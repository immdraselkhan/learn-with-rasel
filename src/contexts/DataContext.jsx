import React, { createContext, useEffect, useState } from 'react'
// Creating context
export const CoursesContext = createContext([]);

const DataContext = ({children}) => {
  
  // Fetched all courses state
  const [allCourses, setAllCourses] = useState([]);

  // Fetching all courses from api server then set to state
  useEffect(() => {
    fetch('https://api-learnwithrasel.vercel.app/courses')
    .then(res => res.json())
    .then(data => setAllCourses(data.data))
    .catch(error => console.log(error));
  },[]);

  // Fetched popular courses only
  const [popularCourses, setPopularCourses] = useState([]);

  // Fetching popular courses from api server then set to state
  useEffect(() => {
    fetch('https://api-learnwithrasel.vercel.app/courses/popular')
    .then(res => res.json())
    .then(data => setPopularCourses(data))
    .catch(error => console.log(error));
  },[]);

  // Fetched categories state
  const [categories, setCategories] = useState([]);

  // Fetching unique categories from api server then set to state
  useEffect(() => {
    fetch('https://api-learnwithrasel.vercel.app/courses/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.log(error));
  },[]);

  return (
    <CoursesContext.Provider value={{allCourses, popularCourses, categories}}>
      {children}
    </CoursesContext.Provider>
  )
};

export default DataContext;