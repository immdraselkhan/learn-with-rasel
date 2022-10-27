import React, { useState, useEffect, useContext } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa'
import { MdOutlineWavingHand } from 'react-icons/md'
import { Menu, Transition } from '@headlessui/react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { DarkThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/UserContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Header = () => {

  // Context from DarkThemeContext
  const {theme, setTheme} = useContext(DarkThemeContext);

  // Getting data using AuthContext
  const {user, userLogOut} = useContext(AuthContext);
  
  // Theme handler and also set the color schema to local storage
  const handleTheme = () => {
    setTheme(!theme)
    localStorage.theme = theme ? 'light' : 'dark';
  };

  // Accroding to the state value dark color schema class adding or removing
  useEffect(() => {
    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  },[theme]);

  // Navigate hook
  const navigate = useNavigate();

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  // Sign out
  const logOut = () => {
    // Logged out
    userLogOut()
    .then(() => {
      // Sign-out successful toast
      toast.success('User logged out!', {
        autoClose: 1500, position: toast.POSITION.TOP_CENTER
      });
      // Redirect to login
      navigate('/login');
    }).catch((error) => {
      // An error happened
    });
  };

  return (
    <header className="p-3 border-general border-b dark:border-white/10 bg-slate-50/60 dark:bg-black sticky top-0 z-40 backdrop-blur-2xl transition-colors duration-500">
      <nav className="max-w-7xl mx-auto">
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
              {user?.uid &&
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button>
                  <img className="h-10 w-10 rounded-full" src={user?.photoURL || 'https://source.unsplash.com/50x50/?portrait?1'} alt={user?.displayName} />
                </Menu.Button>
                <Transition enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 mt-3 origin-top-right bg-white dark:bg-black divide-y dark:divide-white/20 rounded-b-md w-max">
                    <div className="p-5">
                      <Menu.Item><button onClick={() => navigate('/profile')} className="text-black dark:text-white flex items-center gap-2"><MdOutlineWavingHand /> Hi, {user?.displayName || 'Welcome back!'}</button></Menu.Item>
                    </div>
                    <div className="px-5 py-3">
                      <Menu.Item><button onClick={logOut} className="text-black dark:text-white flex items-center gap-2"><FaSignOutAlt /> Log out</button></Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> ||
              <Link to="/login"><button className="text-sm font-medium px-3 py-2 rounded text-white dark:hover:text-black bg-black hover:bg-primary dark:bg-primary dark:hover:bg-gray-100">Login</button></Link>}
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