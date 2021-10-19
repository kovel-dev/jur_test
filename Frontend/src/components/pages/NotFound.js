import React from "react";
import Jur from "../../assets/images/JUR.png";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen not-found">
      <div className="not-found-content">
        <div className="text-center">
          <img src={Jur} alt="" className="mx-auto" />
          <h2 className="mt-8">Oops! Page Not Found</h2>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
