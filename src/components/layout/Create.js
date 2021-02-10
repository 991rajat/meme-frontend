import React from "react";

const Create = (props) => {
  const { title, name, caption, url } = props;
  return (
    <div className="card mb-4">
      <div className="card-header text-center">{title}</div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter a name"
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
            />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mb-1">
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  style={{ width: "100%" }}
                >
                  Cancel
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
