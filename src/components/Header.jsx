import React, { useState, useEffect } from 'react'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'

const Header = () => {

  // // Getting system color schema
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // On page load getting color schema from local storage, if not available use system color schema
  const [theme, setTheme] = useState(localStorage.theme === 'dark' ? true : (localStorage.theme === 'light' ? false : systemTheme));
  
  // Swither handler and also set the color schema to local storage
  const handleTheme = () => {
    setTheme(!theme);
    localStorage.theme = theme ? 'light' : 'dark';
  };

  // Accroding to the state value dark color schema class adding or removing
  useEffect(() => {
    if(theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[theme]);

  return (
    <header className="p-10 bg-black text-white dark:bg-primary">
      <button onClick={handleTheme}>{theme ? <BsMoonFill /> : <BsFillSunFill />}</button>
    </header>
  )
};

export default Header;