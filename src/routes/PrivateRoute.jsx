import { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { LoaderContext } from '../contexts/LoadingContext'
import { AuthContext } from '../contexts/UserContext'

const PrivateRoute = ({children}) => {

  // Getting data using LoadingContext
  const {loading, setLoading} = useContext(LoaderContext);

  // Getting data using AuthContext
  const {user} = useContext(AuthContext);

  // Get current location
  const location = useLocation();

  // Loading until we got the user
  if (loading) {
    <div>Loading...</div>
  } else {
    // When we got the user return return will children
    if (user?.uid) {
      return children;
    } else {
      return <Navigate to='/login' state={{from: location}} replace />;
    }
  }
};

export default PrivateRoute;