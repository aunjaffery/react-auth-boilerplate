import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const render = () => {
    return location.pathname === "/login" || location.pathname === "/signup"
      ? true
      : false;
  };

  return (
    <div>
      {render() ? null : <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
