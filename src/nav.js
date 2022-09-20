import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-brand" href="#">
        Navbar
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="#">
              Features
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" href="#">
              Pricing
            </button>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <button className="dropdown-item">
                Action
              </button>
              <button className="dropdown-item">
                Another action
              </button>
              <button className="dropdown-item">
                Something else here
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 