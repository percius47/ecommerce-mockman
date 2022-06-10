import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";


const PrivateRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateRoute };
