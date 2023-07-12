//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

function Main() {
  const [lightState, setLight] = useState();

  return (
    <div className="container">
      <div className="stem"></div>
      <div className="lightBox">
        <div
          className={"light red" + (lightState == "red" ? " glow" : "")}
          onClick={() => setLight("red")}
        ></div>
        <div
          className={"light yellow" + (lightState == "yellow" ? " glow" : "")}
          onClick={() => setLight("yellow")}
        ></div>
        <div
          className={"light green" + (lightState == "green" ? " glow" : "")}
          onClick={() => setLight("green")}
        ></div>
      </div>
    </div>
  );
}

//render your react application
ReactDOM.render(<Main />, document.querySelector("#app"));
