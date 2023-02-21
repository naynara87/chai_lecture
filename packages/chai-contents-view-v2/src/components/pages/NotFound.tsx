import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// not found page(404)
const NotFound = () => {
  useEffect(() => {
    console.log("not found page");
  }, []);
  return (
    <div>
      <h1>NotFound</h1>
      <Link to="/" replace>
        go to Home
      </Link>
    </div>
  );
};

export default NotFound;
