import React, { useContext } from "react";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Home_Icon from "../assets/Icon.png";

function Nav() {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
      <div className="container" id="nav-container">
        <div>
          <Link to="/">
            <img src={Home_Icon} alt="Home Icon" />
          </Link>
        </div>
        <div>
          <Link className="navbar-brand" to="/">
            HavenForHomeless
          </Link>
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          {isLoggedIn ? (
            <>
              <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/availableServices">
                    Available Services
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/newService">
                    New Service
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" to="/detail">
                    Details
                  </Link>
                </li>
              </ul>
              <span className="ml-auto">
                <a
                  href="https://github.com/Ziyad-Aljaser/haven-for-homeless"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    style={{ color: "black" }}
                  />{" "}
                </a>
              </span>
              <span className="ml-auto">
                <Link className="user">Welcome, {user.username}</Link>
              </span>
              <Link className="btn btn-light action-button" to="/signout">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <span className="ml-auto">
                <a
                  href="https://github.com/Ziyad-Aljaser/haven-for-homeless"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    style={{ color: "black" }}
                  />{" "}
                </a>
              </span>
              <span className="ml-auto">
                <Link className="login-btn" to="/login">
                  Login
                </Link>
              </span>
              <Link className="btn btn-light action-button" to="/signUp">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
