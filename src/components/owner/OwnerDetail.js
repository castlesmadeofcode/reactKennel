import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerDetail.css";

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId).then(owner => {
      setOwner({
        name: owner.name,
        phoneNumber: owner.phoneNumber
      });
      setIsLoading(false);
    });
  }, [props.ownerId]);

  const handleDelete = () => {
    //invoke the delete function in OwnerManger and re-direct to the owner list.
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture></picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{owner.name}</span>
        </h3>
        <p>Phone Number: {owner.phoneNumber}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default OwnerDetail;
