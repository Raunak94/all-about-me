import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [name, setName] = useState("             ");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle link clicks (sets name and closes navbar)
  const handleLinkClick = (newName) => {
    setName(newName);
    setIsNavbarOpen(false); // Close navbar
  };

  return (
    <nav className="navbar navbar-expand-lg  border-bottom border-dark border-1 fixed-top bg-body-tertiary">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link
          className="navbar-brand fname ms-5  "
          style={{ fontSize: "1rem", minWidth: "150px" }}
          to="/"
          onClick={() => handleLinkClick("")}
        >
          {name}
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Collapse */}
        <div
          className={`collapse navbar-collapse text-end fs-5 ${
            isNavbarOpen ? "show" : ""
          }`}
          id="navbarText"
        >
          <ul className="navbar-nav navitems">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => handleLinkClick("")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/work"
                onClick={() => handleLinkClick("Raunak Gaggar")}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cv"
                onClick={() => handleLinkClick("Raunak Gaggar")}
              >
                CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
