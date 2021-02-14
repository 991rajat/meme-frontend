import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import { useDispatch, useSelector } from "react-redux";
import { patchMeme, postMeme } from "../../actions/meme";

const Create = (props) => {
  const title = props.location.state.method;
  let ID;
  const [data, setdata] = useState({
    name: "",
    caption: "",
    url: "",
  });

  const storestate = useSelector((state) => state.memes);

  const [loading, setloading] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const dispatch = useDispatch();
  const [method, setmethod] = useState(title);
  const onValueChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setmethod(title);
    // console.log(props.location.state.method);
    // console.log(method);
    // console.log(title);
    setmethod(title);
    if (title === "UPDATE") {
      let data_param = props.location.state.data;
      console.log(data_param);
      setdata({
        name: data_param.name,
        caption: data_param.caption,
        url: data_param.url,
      });
      document.querySelector("#name-input-form").readOnly = true;
      ID = data_param.id;
      console.log(ID);
    } else {
      document.querySelector("#name-input-form").readOnly = false;
      setdata({
        name: "",
        caption: "",
        url: "",
      });
    }
  }, [title]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.name === "") {
      // document.querySelector("#name-input-form").className =
      //   "form-control is-invalid";
    }
    if (title === "CREATE") {
      document.querySelector(".submit-btn").disabled = true;
      setloading(true);
      await dispatch(postMeme(data));
      setloading(false);
      setsubmitted(true);
      //data.error = storestate.error;
      //console.log(data.error);
      setTimeout(() => {
        setsubmitted(false);
        document.querySelector(".submit-btn").disabled = false;
        if (storestate.error === "") {
          document.querySelector(".submit-btn").disabled = false;
          setdata({
            name: "",
            caption: "",
            url: "",
          });
        }
      }, 2000);
    } else {
      console.log(ID);

      //document.querySelector(".submit-btn").disabled = true;
      setloading(true);
      await dispatch(patchMeme(data, props.location.state.data.id));
      setsubmitted(true);
      setloading(false);
      setTimeout(() => {
        setsubmitted(false);
        //document.querySelector(".submit-btn").disabled = false;
      }, 2000);
    }
  };

  const onClear = (e) => {
    e.preventDefault();

    if (title == "CREATE") {
      setdata({
        name: "",
        caption: "",
        url: "",
      });
    } else {
      setdata({
        ...data,
        caption: "",
        url: "",
      });
    }
  };

  return (
    <div className="card mb-4 centre-form">
      <div className="card-header text-center">
        {title}{" "}
        {loading && (
          <div>
            <br />
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {submitted &&
          (storestate.error === "" ? (
            <div className="alert alert-success" role="alert">
              Success
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              Failure
              <br />
              <p>{storestate.error}</p>
            </div>
          ))}
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="mb-3 name-input">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name-input-form"
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter a name"
              value={data.name}
              onChange={onValueChange}
            />
          </div>

          <div className="mb-3 caption-input">
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

          <div className="mb-3 url-input">
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
                  className="btn-dark btn btn-block submit-btn"
                  style={{ width: "100%" }}
                />{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.defaultProps = {
  title: "Create a new meme.",
};

export default Create;
