import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture></picture>
        <h3>
          Name: <span className="card-petname">{props.employee.name}</span>
        </h3>
        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          Discharge
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
