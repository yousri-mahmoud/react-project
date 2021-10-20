import React from "react";

function Loading() {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border  " role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Loading;
