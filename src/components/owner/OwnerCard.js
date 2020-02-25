import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3>Name: <span className="card-petname">
          {props.owner.name}
        </span></h3>
        <p>Phone Number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Discharge</button>
      </div>
    </div>
  );
}

export default OwnerCard;