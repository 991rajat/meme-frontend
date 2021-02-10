import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {" "}
          Meme
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button type="button" class="btn btn-danger">
                {" "}
                Create a Meme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
