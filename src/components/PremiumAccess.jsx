import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const PremiumAccess = () => {

  // Getting data using useLoaderData hook
  const course = useLoaderData();

  const {title, description, thumbnail} = course;

  return (
    <section className="text-gray-600 dark:text-white bg-slate-50 dark:bg-[#0B1120]">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="hero" src={thumbnail} />
        <div className="text-center lg:w-2/3 w-full">
          <h2 className="text-3xl mb-10">Congratulations! You've got Premium Access!</h2>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">{title}</h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <Link to={'/'} className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:secondary rounded text-lg">Go to home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumAccess;