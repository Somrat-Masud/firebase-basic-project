import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const signOutHandle = () => {
    signOutUser()
      .then((result) => {
        console.log("user sign out successfully", result);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };
  console.log(user);
  const links = (
    <>
      <NavLink to="/">
        <a>Home</a>
      </NavLink>
      <NavLink to="register">
        <a>Register</a>
      </NavLink>
      <NavLink to="login">
        <a>Login</a>
      </NavLink>
      {user && (
        <>
          <NavLink to="orders">
            <a>Orders</a>
          </NavLink>
          <NavLink to="profile">
            <a>Profile</a>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] gap-4 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">{user?.email}</a> */}
          {user ? (
            <>
              <span>{user.email}</span>
              <a onClick={signOutHandle} className="btn">
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
