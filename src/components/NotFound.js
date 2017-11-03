import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="card mb-3">
    <img
      className="card-img-top"
      src="http://files.onedna.in/uploads/2014/04/404-error-page-not-found.png"
      alt="Card image cap"
    />
    <div className="card-body">
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
      <Link to="/">Go back to the Home Page</Link>
    </div>
  </div>
);
export default NotFound;
