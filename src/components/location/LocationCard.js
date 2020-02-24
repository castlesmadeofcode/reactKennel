import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3>Name: <span className="card-petname">
          {props.location.name}
        </span></h3>
      </div>
    </div>
  );
}

export default LocationCard;