import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          MemeshiMemes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <span classNameName="links">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link active">
                Create a Meme
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <nav classNameName="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1">
      <div classNameName="container">
        <Link to="/" classNameName="navbar-brand">
          MemeshiMemes
        </Link>
        <div>
          <ul classNameName="navbar-nav mr-auto">
            <li classNameName="nav-item">
              <Link to="/">
                <span classNameName="links">Home</span>
              </Link>
            </li>
            <li classNameName="nav-item">
              <Link to="/create">Create a Meme</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav> */
}
