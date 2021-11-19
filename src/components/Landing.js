import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import url from "./URL"
import Plant from "./Plant"
import PlantDetails from "./PlantDetails"
import PlantForm from "./PlantForm"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import styled from "styled-components"

const initialFormValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
  imageURL: "",
}

const initialPlants = []

function PlantPage() {
  const [plants, setPlants] = useState(initialPlants)
  const [formValues, setFormValues] = useState(initialFormValues)

  const getPlants = () => {
    axiosWithAuth()
      .get(`${url}/api/plants`)
      .then((res) => {
        setPlants(res.data)
      })
      .catch((err) => console.error({ err }))
  }

  const postNewPlant = (newPlant) => {
    axiosWithAuth()
      .post(`${url}/api/plants`, newPlant)
      .then((res) => {
        setPlants([res.data, ...plants])
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      h2oFrequency: formValues.h2oFrequency.trim(),
      imageURL: formValues.imageURL,
    }
    postNewPlant(newPlant)
  }

  useEffect(() => {
    getPlants()
  }, [])

  return (
    <Switch>
      <Route exact path="/landing">
        <div className="container">
          <PlantForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          />
          <Container>
            {plants.map((plant) => {
              return <Plant key={plant.id} details={plant} />
            })}
          </Container>
        </div>
      </Route>
      <Route path="/landing/:id">
        <PlantDetails plants={plants} setPlants={setPlants} />
      </Route>
    </Switch>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: -2rem;
`

export default PlantPage
