import React from "react";
import errorImg from "./404.jpg";

// For displaying Error when user navigate to a route that doesn' exist for this domain.

function ErrorPage() {
  return (
    <div>
      <div className="container my-5 col-12 mx-auto text-center">
        <h1>404 Page Not Found</h1>
        <h4>Please check the path and try again</h4>
        <img src={errorImg} alt={errorImg} height="250px" width="500px" />
      </div>
    </div>
  );
}

export default ErrorPage;
