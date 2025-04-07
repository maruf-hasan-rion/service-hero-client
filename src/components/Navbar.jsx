import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { FaCircleUser } from "react-icons/fa6";
import AuthContext from "../contexts/AuthContext";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="navbar bg-blue-900 fixed z-10  text-white">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="font-semibold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="font-semibold">
                  Services
                </NavLink>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="font-semibold">Dashboard</summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                    <li>
                      <Link to="/addService">Add Service</Link>
                    </li>
                    <li>
                      <Link to="/manageService">Manage Service</Link>
                    </li>
                    <li>
                      <Link to="/bookedServices">Booked Services</Link>
                    </li>
                    <li>
                      <Link to="/serviceToDo">Service To Do</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to="/" className="p-2 font-bold text-xl md:text-3xl">
            <img
              className="w-[40px] md:w-[52px] inline-block p-2 mr-2 rounded-full"
              src="/favicon.svg"
              alt=""
            />
            Service Hero
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/" className="font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="font-semibold">
                Services
              </NavLink>
            </li>
            {user && user?.email ? (
              <li>
                <details className="dropdown">
                  <summary className="font-semibold">Dashboard</summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                    <li>
                      <Link to="/addService">Add Service</Link>
                    </li>
                    <li>
                      <Link to="/manageService">Manage Service</Link>
                    </li>
                    <li>
                      <Link to="/bookedServices">Booked Services</Link>
                    </li>
                    <li>
                      <Link to="/serviceToDo">Service To Do</Link>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <li></li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <DarkMode></DarkMode>
          <div className="">
            {user && user?.email ? (
              <div className="flex px-2 items-center gap-1">
                <img
                  className="w-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="font-semibold p-2 rounded-3xl">
                  {user?.displayName}
                </p>
              </div>
            ) : (
              <div></div>
              // <div className="text-3xl px-8">
              //   <FaCircleUser></FaCircleUser>
              // </div>
            )}
          </div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn btn-neutral rounded-none">
              Sign Out
            </button>
          ) : (
            <Link to="/signIn" className="btn btn-neutral rounded-none">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
