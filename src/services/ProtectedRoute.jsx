import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  return isAllowed ? children : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;

