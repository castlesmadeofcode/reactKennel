import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
        });
        setIsLoading(false);
      });
  }, [props.employeeId]);

  const handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
      props.history.push("/employees")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>

      </div>
    </div>
  );
}

export default EmployeeDetail;