import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import url from "./URL";
import  PlantChange from "./PlantChange"

function PlantDetails({ plants }) {
  const { id } = useParams();
  const [details] = plants.filter((plant) => plant.id === id);
  let updatingPlant = false;

  const updatePlant = () => {
    axios.put(`${url}`);
  };

  if (!details) return <p> Plant does not exist or loading plant </p>;
  return (
    <div>
      {!updatingPlant ? (
        <div className="plant details container">
          <img src={details.imageURL} alt="this is a plant" />
          <h2>{details.id}</h2>
          <p>Nickname: {details.nickname}</p>
          <p>Species: {details.species}</p>
          <p>Watering Frequency: {details.h2oFrequency}</p>
        </div>
      ) : (
        <div>
            <PlantChange plant={details}/>
        </div>
      )}

      <div className="Plant Buttons">
        <button onClick={updatePlant}> Update Plant </button>
        <button> Delete Plant </button>
      </div>
    </div>
  );
}

export default PlantDetails;
