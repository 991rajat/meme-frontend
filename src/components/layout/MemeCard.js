import React from "react";

const MemeCard = (props) => {
  const { name, caption, url } = props.data;
  console.log(props);
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img
          src={url}
          className="card-img-top resizing  "
          alt="../../../../public/logo512.png"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {caption}{" "}
            <button className="btn bg-danger edit-btn">
              <i className="fas fa-pencil-alt "></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

MemeCard.defaultProps = {
  data: {
    name: "C",
    caption: "u",
    url: "asd",
  },
};

export default MemeCard;
