import React, { createContext, useState } from 'react'

// Creating Context
export const LoaderContext = createContext();

const LoadingContext = ({children}) => {

  // Loading state
  const [loading, setLoading] = useState(false);

  // Loader until loading state false
  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    )
  };

  return (
    <LoaderContext.Provider value={{loading, setLoading}}>
      {children}
    </LoaderContext.Provider>
  )
};

export default LoadingContext;