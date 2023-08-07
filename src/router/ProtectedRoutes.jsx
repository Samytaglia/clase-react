import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {

    let userRol = "customer"

  return (
    <div>{userRol === "admin" ? <Outlet/> : <Navigate to="/"/> }</div>
  )
}

export default ProtectedRoutes;