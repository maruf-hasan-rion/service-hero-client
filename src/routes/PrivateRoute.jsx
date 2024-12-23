/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import Loading from '../pages/Loading'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return <Loading></Loading>
  if (user && user?.email) return children
  
  return <Navigate to='/signIn' state={location.pathname}></Navigate>
}

export default PrivateRoute
