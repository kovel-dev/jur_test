import React, { useEffect, useState } from "react";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const profileResponse = useSelector((state) => state.userDetails.userProfile);
  console.log(profileResponse);

  const authResponse = useSelector((state) => state.userAuth.authResponse);
  let [hideMobileNav, setHideMobileNav] = useState(true);
  const toggleMobileNav = () => setHideMobileNav((prevState) => !prevState);
  const closeMobileNav = () => setHideMobileNav(true);

  const logOut = () => {
    dispatch(LogoutAction());
    localStorage.removeItem("user-token");
    history.push("/user/login");
  };

  const login = () => {
    history.push("/user/login");
  };

  const token = localStorage.getItem("user-token");

  useEffect(() => {
    if (authResponse !== "" && authResponse.success === true) {
      localStorage.removeItem("user-token");
    }
    return () => {};
  }, [authResponse]);

  return (
    <div className="flex flex-row h-16 border-b auth-nav border-grey-light">
      <div className="container flex flex-col items-center justify-between mx-auto auth-navbar lg:flex-row ">
        <div className="flex justify-between flex-1 w-full left lg:w-auto lg:flex-initial">
          <ul className="flex items-center list-reset">
            <li>
              <NavLink
                to="/"
                activeClassName="font-bold"
                className="text-gray-800 no-underline text-indigo"
              >
                <img src={Logo} alt="" />
              </NavLink>
            </li>
          </ul>

          <div
            onClick={toggleMobileNav}
            id="sidebar-open"
            className="z-50 flex items-center px-6 text-gray-700 lg:hidden"
          >
            <span
              className={`svg-full ${!hideMobileNav ? "mobile-nav-show" : ""}`}
            >
              MENU &nbsp;
              <svg
                className="fill-current"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="12"
                viewBox="0 0 35 12"
              >
                <rect width="35" height="2"></rect>
                <rect y="5" width="24" height="2"></rect>
                <rect y="10" width="14" height="2"></rect>
              </svg>
            </span>
          </div>
        </div>

        <div
          className={`right lg:flex pt-8 lg:pt-0 right fixed lg:relative bg-white w-full lg:w-auto h-screen lg:h-auto ${
            hideMobileNav ? "mobile-hidden" : ""
          }`}
        >
          <ul className="flex flex-col items-center py-8 mt-8 lg:py-0 lg:mt-0 list-reset lg:flex-row">
            <li onClick={closeMobileNav} className="px-4 py-3 lg:py-0">
              <NavLink
                to={`/user/dashboard`}
                className="text-2xl font-bold text-gray-700 underline capitalize lg:text-sm lg:font-light lg:no-underline"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="px-4 py-3 lg:py-0">
              {token !== null && token !== "" ? (
                <button
                  onClick={logOut}
                  className="flex items-center text-2xl btn-outline-none font-bold text-gray-700 underline capitalize lg:text-sm lg:font-light lg:no-underline"
                >
                  <span className="flex items-center justify-center mr-2 user-log">
                    {profileResponse !== "" &&
                      profileResponse !== null &&
                      profileResponse.success === true &&
                      `${profileResponse?.data?.first_name?.slice(
                        0,
                        1
                      )}${profileResponse?.data?.last_name?.slice(0, 1)}`}
                  </span>
                  Logout
                </button>
              ) : (
                <button
                  onClick={login}
                  className="flex items-center text-2xl font-bold text-gray-700 underline capitalize lg:text-sm lg:font-light lg:no-underline"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
