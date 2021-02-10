import React from "react";

const MemeCard = () => {
  return (
    <div>
      <div className="card">
        <img src="./logo512.png" class="card-img-top" alt="./logo512.png" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
