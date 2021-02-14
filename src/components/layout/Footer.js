import React from "react";

const Footer = () => {
  return (
    <footer
      className="container-fluid bg-dark rounded text-muted footer"
      style={{ height: "45px" }}
    >
      <div className="container mt-0 text-center">
        <p className="p-2 text-white">
          Made with <i className="fas fa-heart " style={{ color: "red" }}></i>
          <span> Copyright &copy;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
