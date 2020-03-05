import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import AnimalCard from "../animal/AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

const EmployeesWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId).then(
      APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      }
    );
  }, []);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    //disable delete button after card is deleted
    console.log("props", props);
    AnimalManager.delete(props.animalId).then(
      () => props.history.push("/animals")
      //redirects the user to animals page after delete by pushing /animals to history
    );
  };

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} {...props} />
      ))}
    </div>
  );
};

export default EmployeesWithAnimals;
