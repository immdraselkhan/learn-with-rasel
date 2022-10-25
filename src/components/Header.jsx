import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  // Getting system color schema
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // On page load getting color schema from local storage, if not available use system color schema
  const [theme, setTheme] = useState(localStorage.theme === 'dark' ? true : (localStorage.theme === 'light' ? false : systemTheme));
  
  // Theme handler and also set the color schema to local storage
  const handleTheme = () => {
    setTheme(!theme);
    localStorage.theme = theme ? 'light' : 'dark';
  };

  // Accroding to the state value dark color schema class adding or removing
  useEffect(() => {
    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  },[theme]);

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80 px-3 py-3">
      <nav className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <NavLink to="/"><img className="h-10" src={`${theme ? '/logo-dark.svg' : '/logo.svg'}`} alt="LWR logo" /></NavLink>
          <div className="flex items-center justify-between gap-6 md:gap-10 dark:text-white">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex gap-3">
                  <NavLink to="/" className={({ isActive }) => `${isActive && 'active-item'} menu-item`}>Home</NavLink>
                  <NavLink to="/courses" className={({ isActive }) => `${isActive && 'active-item'} menu-item`}>Courses</NavLink>
                  <NavLink to="/faq" className={({ isActive }) => `${isActive && 'active-item'} menu-item`}>Faq</NavLink>
                  <NavLink to="/blog" className={({ isActive }) => `${isActive && 'active-item'} menu-item`}>Blog</NavLink>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-xl" onClick={handleTheme}>{theme ? <FaMoon className="dark:text-white" /> : <FaSun />}</button>
              <button className="text-sm font-medium px-3 py-2 rounded text-white bg-black hover:bg-primary dark:bg-primary dark:hover:bg-secondary">Login</button>
            </div>
            <div className="flex md:hidden">
              <button className="text-2xl dark:fill-white" onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <FaBars /> : <FaTimes />}</button>
            </div>
          </div>
        </div>
        <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          {(
            <div className="md:hidden" id="mobile-menu">
              <div className="py-10 space-y-3">
                <NavLink to="/" className={({ isActive }) => `${isActive && 'active-item'} menu-item block w-fit mx-auto`}>Home</NavLink>
                <NavLink to="/courses" className={({ isActive }) => `${isActive && 'active-item'} menu-item block w-fit mx-auto`}>Courses</NavLink>
                <NavLink to="/faq" className={({ isActive }) => `${isActive && 'active-item'} menu-item block w-fit mx-auto`}>Faq</NavLink>
                <NavLink to="/blog" className={({ isActive }) => `${isActive && 'active-item'} menu-item block w-fit mx-auto`}>Blog</NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
};

export default Header;