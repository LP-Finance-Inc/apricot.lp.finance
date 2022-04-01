import React from "react";
import { NavLink } from "react-router-dom";
import HeaderWrapper from "./Header.style";
import navbarApi from "../../assets/api/navbarApi";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div className="container first_navbar">
          <div className="row">
            <div className="col-12 m-0 p-0">
              <nav className="navbar navbar-light">
                <NavLink to="/" className="navbar-brand ml-lg-0 ml-md-0 ml-1">
                  <img src="/images/Logo.png" alt="Loading..." />
                </NavLink>

                <ul className="navbar-nav left_ui_block ml-auto d-flex justify-content-center align-items-center flex-row">
                  <div className="left_ui_block_hide"></div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container second_navbar">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-light">
                <ul className="navbar-nav  second_navbar_block mr-auto d-flex justify-content-center align-items-center flex-row">
                  <div className="second_navbar_list">
                    {navbarApi.map((nav) => {
                      return (
                        <li className="nav-item" key={nav.id}>
                          <NavLink
                            exact="true"
                            to={nav.href}
                            className="nav-link"
                            activeclassname="active"
                          >
                            {nav.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
