import React, { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo2 from "../assets/logo2.png";
import "../css/header.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navLinkStyles = ({ isActive }) => {
    return { color: isActive ? "#00ff11" : "white" };
  };
  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <div>
            <NavLink to="/" className="logo">
              <img className="logo"
                src={logo2}
                style={{ width: "20px", borderRadius: "20px" }}
              ></img>

            </NavLink>

          </div>
          {isAuthenticated && (
            <div className="user-title">
              Welcome {user.nickname}
            </div>
          )}
        </div>
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setIsMobile(false)}>
          <NavLink style={navLinkStyles} to="/" className="workstyles">
            <li>WorkStyles</li>
          </NavLink>
          {isAuthenticated && <NavLink style={navLinkStyles} to="/workoutlog" className="logs">
            <li>Logs</li>
          </NavLink>}
          <NavLink style={navLinkStyles} to="/about" className="about">
            <li>About</li>
          </NavLink>
          <NavLink className="signup">
            <li>{isAuthenticated ? (
              <button className="#signup"
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </button>
            ) : (
              <button className="#signup" onClick={() => loginWithRedirect()}>Log In</button>
            )}</li>
          </NavLink>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars "></i>)}
        </button>
      </nav>


    </>
  );
};
export default Header;