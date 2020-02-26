import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "" });

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          phoneNumber: owner.phoneNumber
        });
      });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
        <p>Phone Number: {owner.phoneNumber}</p>
      </div>
    </div>
  );
}

export default OwnerDetail;