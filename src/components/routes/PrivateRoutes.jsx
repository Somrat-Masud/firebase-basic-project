import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-md"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="login"></Navigate>;
};

export default PrivateRoutes;
