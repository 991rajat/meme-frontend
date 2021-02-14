import React from "react";
import { Link } from "react-router-dom";

//Card Layout
const MemeCard = (props) => {
  const { name, caption, url } = props.data;
  //console.log(props.data);
  return (
    <div className="col-md-4 col-sm-6 mb-3 m-0 p-1 ">
      <div className="card shadow rounded p-0 m-0 h-100">
        <img src={url} className="card-img-top resizing " alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {caption}{" "}
            <Link
              to={{
                pathname: "/create",
                state: { method: "UPDATE", data: props.data },
              }}
            >
              <button
                className="btn edit-btn"
                style={{ backgroundColor: "#dc4146" }}
              >
                <i className="fas fa-pencil-alt "></i>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

MemeCard.defaultProps = {
  data: {
    name: "Name",
    caption: "Caption",
    url: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",
  },
};

export default MemeCard;
