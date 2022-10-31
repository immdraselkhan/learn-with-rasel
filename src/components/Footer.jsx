import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa'
import { DarkThemeContext } from '../contexts/ThemeContext'

const Footer = () => {

  // Context from DarkThemeContext
  const {theme} = useContext(DarkThemeContext);

  return (
    <footer className="px-3 bg-slate-50/60 dark:bg-black/95 border-general border-t dark:border-white/10 backdrop-blur-2xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto divide-y divide-gray-400 divide-opacity-20">
        <div className="py-10">
          <img className="w-24 mx-auto md:mx-0" src={`${theme ? '/logo-dark.svg' : '/logo.svg'}`} alt="LWR Logo" />
        </div>
        <div className="block md:flex justify-between items-center py-5 space-y-8 md:space-y-0 text-slate-700 dark:text-slate-400">
          <div className="flex flex-col md:flex-row gap-5 self-center text-sm text-center">
            <Link to="/" className="hover:text-black dark:hover:text-slate-200">
              <span>© {new Date().getFullYear()} All rights reserved</span>
            </Link>
            <Link to="/" className="hover:text-black dark:hover:text-slate-200">
              <span>Privacy policy</span>
            </Link>
            <Link to="/" className="hover:text-black dark:hover:text-slate-200">
              <span>Terms of service</span>
            </Link>
          </div>
          <div className="flex justify-center gap-3">
            <Link to="" title="Facebook" className="footer-menu">
              <FaFacebook />
            </Link>
            <Link to="" title="Twitter" className="footer-menu">
              <FaTwitter />
            </Link>
            <Link to="" title="Github" className="footer-menu">
              <FaGithub />
            </Link>
            <Link to="" title="YouTube" className="footer-menu">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;