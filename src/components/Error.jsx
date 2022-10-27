import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Error = () => {

  // Getting error info
  const {status, statusText} = useRouteError();

  return (
    <>
      <Header />
        <main>
          <section className="px-3 mx-auto flex items-center h-[calc(100vh_-_276px)] bg-slate-50 dark:bg-[#0B1120]">
            <div className="max-w-fit mx-auto flex flex-col items-center">
              <h2 className="font-black dark:text-white text-9xl">{status || 'Error'}</h2>
              <p className="text-white font-semibold mt-14 px-2 bg-primary rotate-12 absolute">{statusText || 'Opps!'}</p>
              <p className="dark:text-white text-2xl lg:text-3xl font-bold my-8">Sorry, we couldn't find this page!</p>
              <Link to="/" className="text-white px-10 py-3 font-semibold bg-primary hover:bg-secondary rounded-full">Back to home</Link>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
};

export default Error;