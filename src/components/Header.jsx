import React, { useState } from 'react'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'

const Header = () => {

  // Getting system color schema
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // On page load getting color schema from local storage, if not available use system color schema
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && systemTheme)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  };

  // Color schema state, initially getting theme from local storage
  const [theme, setTheme] = useState(localStorage.theme);

  // When theme stata have value, will set that to local storage
  theme && (localStorage.theme = theme);
  
  return (
    <header className="p-10 bg-black text-white dark:bg-primary">
      <button onClick={() => {theme === 'light' ? setTheme('dark') : theme === 'dark' ? setTheme('light') : (systemTheme ? setTheme('light') : setTheme('dark'))}}>{theme === 'light' ? <BsFillSunFill /> : <BsMoonFill />}</button>
    </header>
  )
};

export default Header;