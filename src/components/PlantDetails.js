import React, { useState } from "react"
import { useParams } from "react-router-dom"
import url from "./URL"
import PlantChange from "./PlantChange"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router"

function PlantDetails({ plants, setPlants }) {
  const { push } = useHistory()
  const id = Number(useParams().id)
  const [details] = plants.filter((plant) => plant.id === id)
  console.log(details)
  const [values, setValues] = useState(
    plants.filter((plant) => plant.id === id)[0]
  )
  console.log(values)
  const [updatingPlant, setUpdatingPlant] = useState(false)

  const change = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const updatePlant = () => {
    axiosWithAuth()
      .put(`${url}/api/plants`, values)
      .then((res) => {
        setPlants(
          plants.map((plant) => {
            if (plant.id === values.id) return res.data
            else return plant
          })
        )
        setUpdatingPlant(false)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  const deletePlant = () => {
    console.log(typeof details.id)
    axiosWithAuth()
      .delete(`${url}/api/plants`, { data: { id: details.id } })
      .then((res) => {
        setPlants(plants.filter((plant) => plant.id !== details.id))
        push("/landing")
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  if (!details) return <p> Plant does not exist or loading plant </p>
  return (
    <div>
      {!updatingPlant ? (
        <div className="plant details container">
          <img
            src={details.imageURL}
            alt="this is a plant"
            style={{ maxWidth: "300px" }}
          />
          <h2>{details.id}</h2>
          <p>Nickname: {details.nickname}</p>
          <p>Species: {details.species}</p>
          <p>Watering Frequency: {details.h2oFrequency}</p>
        </div>
      ) : (
        <div>
          <PlantChange values={values} change={change} />
        </div>
      )}

      <div className="Plant Buttons">
        {!updatingPlant ? (
          <button onClick={() => setUpdatingPlant(true)}> Update Plant </button>
        ) : (
          <>
            <button onClick={() => setUpdatingPlant(false)}>
              Cancel Update Plant
            </button>
            <button onClick={updatePlant}>Confirm Update Plant</button>
          </>
        )}
        <button onClick={deletePlant}> Delete Plant </button>
      </div>
    </div>
  )
}

export default PlantDetails
