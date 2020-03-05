import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationManager from "../../modules/LocationManager";
import "./EmployeeForm.css";

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({
    name: "",
    locationId: ""
  });
  const [locations, setLocation] = useState([]);
  console.log(locations);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      locationId: parseInt(employee.locationId)
    };

    EmployeeManager.update(editedEmployee).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then(employee => {
      setEmployee(employee);
      LocationManager.get(locations).then(location => {
        setLocation(location);
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <select
              className="form-control"
              id="locationId"
              value={employee.locationId}
              onChange={handleFieldChange}
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <label htmlFor="locationId">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeEditForm;
