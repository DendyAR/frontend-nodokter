import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (navbarOpen && user?.user.role === "admin") {
      setNavbarOpen(true);
    }
  }, [navbarOpen, user]);

  const Logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  console.log(user?.user.role);
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center">
            <span className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">
              <p className="text-gray-900 dark:text-white hover:underline">
                Welcom back : {user?.user.name}
              </p>
            </span>
            <button
              type="button"
              onClick={Logout}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {user?.user.role !== "admin" ? (
                " "
              ) : (
                <li>
                  <NavLink
                    to="/add-products"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Add Products
                  </NavLink>
                </li>
              )}

              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>

              <li>
                <h1 className="text-gray-900 dark:text-white hover:underline"></h1>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
