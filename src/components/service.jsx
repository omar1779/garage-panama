import React from "react";
import icon from "../../public/G.jpg"
function Service(props) {
  return (
    <div className="card" style={{height: "50%"}}>
      <img src={icon} className="card-img-top mx-auto" style={{
        height: "30%",
        width: "30%",
      }} alt="..." />
      <div className="card-body">
        <h4>{props.title}</h4>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Service;
