import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);
  // By putting isLoading in the component's state, we can trigger a re-render
  //  by changing its value.
  //initial value of isLoading = true

  //isLoading is passed to disabled in line 50
  //when disabled = true the button is disabled

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
      setIsLoading(false);
      //enables the delete button ^
    });
  }, [props.animalId]);
  //anything you want to monitor for changes goes inside the above array
  //anytime the thing inside the array changes the page will re-render

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    //disable delete button after card is deleted

    AnimalManager.delete(props.animalId).then(
      () => props.history.push("/animals")
      //redirects the user to animals page after delete by pushing /animals to history
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`./animal--${props.animalId}.jpeg`)} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;
