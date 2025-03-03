import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar bg-white shadow-sm px-4 md:px-6 lg:px-8 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow items-center gap-6"
            >
              <li>
                <NavLink to="/available_studios">Available Studios</NavLink>
              </li>
              <li>
                <NavLink to="/booking_history">Booking History</NavLink>
              </li>
            </ul>
          </div>

          <Link to="/">
            <button className="text-3xl font-bold text-gray-700 cursor-pointer">
              SnapStudio
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-base items-center gap-6">
            <li>
              <NavLink to="/available_studios">Available Studios</NavLink>
            </li>
            <li>
              <NavLink to="/booking_history">Booking History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;