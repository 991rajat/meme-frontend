import React, { useState } from "react";
import MemeCard from "./MemeCard";
import { useDispatch } from "react-redux";
import { postMeme } from "../../actions/meme";

const Create = (props) => {
  const [data, setdata] = useState({
    name: "",
    caption: "",
    url: "",
  });
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postMeme(data));
  };

  const onClear = (e) => {
    e.preventDefault();
    setdata({
      name: "",
      caption: "",
      url: "",
    });
  };
  const { title, name, caption, url } = props;
  return (
    <div className="card mb-4">
      <div className="card-header text-center">{title}</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter a name"
              value={data.name}
              onChange={onValueChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="caption" className="form-label">
              Caption
            </label>
            <input
              type="text"
              name="caption"
              className="form-control"
              placeholder="Enter a caption"
              value={data.caption}
              onChange={onValueChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <input
              type="text"
              name="url"
              className="form-control"
              placeholder="Enter a url"
              value={data.url}
              onChange={onValueChange}
            />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mb-1">
                <button
                  onClick={onClear}
                  className="btn btn-danger btn-block"
                  style={{ width: "100%" }}
                >
                  Clear
                </button>
              </div>
              <div className="col-md-6 mb-1 pd-0">
                <input
                  type="submit"
                  className="btn-dark btn btn-block"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.defaultProps = {
  title: "Let's posts a new meme",
};

export default Create;
