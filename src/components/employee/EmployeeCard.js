import React from "react";

  const EmployeeCard = props => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          </picture>
          <h3>Name: <span className="card-petname">
            {props.employee.name}
          </span></h3>
        </div>
      </div>
    );
  }

export default EmployeeCard;