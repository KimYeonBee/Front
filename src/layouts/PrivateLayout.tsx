import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("access");

  if (!accessToken) {
    alert("로그인이 필요해요!");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
