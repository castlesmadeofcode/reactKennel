import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDeatail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          // console.log(props)
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}

              //Route gives us access to props (history, location, match)
              //{...props} makes a copy of props and passes them along to AnimalDetail
            />
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          // Pass the locationId to the LocationDetailComponent
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />

      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)"
        render={props => {
          // Pass the employeeId to the EmployeeDetailComponent
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
              {...props}
            />
          );
        }}
      />

      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)"
        render={props => {
          // Pass the ownerId to the OwnerDetailComponent
          return (
            <OwnerDetail
              ownerId={parseInt(props.match.params.ownerId)}
              {...props}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
