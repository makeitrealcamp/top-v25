import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectAuth } from "./authSlice"

const RequireAuth = ({ children, roles }) => {
  const { isAuth, profile } = useSelector(selectAuth)

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  if (roles && !roles.includes(profile.role)) {
    return <Navigate to="/unauthorized" />
  }

  return children
}

export default RequireAuth
