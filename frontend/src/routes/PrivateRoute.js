import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const loginState = useSelector((state) => state.login);

  return loginState ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default PrivateRoute;
