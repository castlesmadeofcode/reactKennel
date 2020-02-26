import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: ""});

  useEffect(() => {
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employee => {
        console.log("employee",employee);
        setEmployee({
          name: employee.name,
        });
      });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>

      </div>
    </div>
  );
}

export default EmployeeDetail;