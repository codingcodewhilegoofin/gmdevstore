import React, { Component, useState, useEffect } from "react";

const ServiceDescriptions = () => {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 1000px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener("change", updateSize);

    return function clean() {
      mq.removeEventListener("change", updateSize);
    };
  }, []);

  if (windowSize) {

  } else {

  }

  return (
    <div>
      <div
        className="gio-container-1"
        style={{ padding: "5px", fontSize: "x-large" }}
      >
        Service
      </div>
    </div>
  );
};
export default ServiceDescriptions;