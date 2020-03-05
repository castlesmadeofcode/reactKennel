import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from "../employee/EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const LocationWithEmployees = props => {
  console.log(props);
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("emp", employees);

  useEffect(() => {
    //got here now make call to get location with employee
    LocationManager.getWithEmployees(props.match.params.locationId).then(
      APIResult => {
        console.log(APIResult);
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      }
    );
  }, []);

  const handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    setIsLoading(true);
    //disable delete button after card is deleted
    console.log("props", props);
    EmployeeManager.delete(props.employeeId).then(
      () => props.history.push("/employees")
      //redirects the user to employees page after delete by pushing /employees to history
    );
  };

  return (
    <div className="card">
      <p>Location: {location.name}</p>
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} {...props} />
      ))}
    </div>
  );
};

export default LocationWithEmployees;
