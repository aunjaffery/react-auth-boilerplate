import { NavLink } from "react-router-dom";
import useBoundStore from "../../store/Store";

const Navbar = () => {
  const { logoutService, user } = useBoundStore((state) => state);
  const onLogout = () => {
    logoutService();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "40px",
        background: "#f3f3f3",
      }}
    >
      <NavLink to="/">
        <h3 style={{ color: "black" }}>LOGO</h3>
      </NavLink>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gridColumnGap: "40px",
        }}
      >
        <NavLink to="/">
          {({ isActive }) => (
            <h4
              style={{
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "green" : "blue",
              }}
            >
              Home
            </h4>
          )}
        </NavLink>
        <NavLink to="products">
          {({ isActive }) => (
            <h4
              style={{
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "green" : "blue",
              }}
            >
              Products
            </h4>
          )}
        </NavLink>
        {!!user ? (
          <h4 onClick={onLogout} style={{ cursor: "pointer", color: "blue" }}>
            Logout
          </h4>
        ) : (
          <NavLink to="login">
            <h4 style={{ cursor: "pointer", color: "blue" }}>Login</h4>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
