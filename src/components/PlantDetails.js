import React, { useState } from "react"
import { useParams } from "react-router-dom"
import url from "./URL"
import PlantChange from "./PlantChange"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router"
import Typography from "./Typography"
import AppForm from "./AppForm"
import FormButton from "../modules/FormButton"
import withRoot from "../withRoot"
import styled from "styled-components"

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
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography
            variant="h4"
            gutterBottom
            marked="center"
            align="center"
            color="#fff"
          >
            {details.id}
          </Typography>
        </React.Fragment>
        <div>
          {!updatingPlant ? (
            <Details>
              {details.imageURL && (
                <img
                  src={details.imageURL}
                  alt="this is a plant"
                  style={{ maxWidth: "300px", marginBottom: "20px" }}
                />
              )}
              <p>Nickname: {details.nickname}</p>
              <p>Species: {details.species}</p>
              <p>Watering Frequency: {details.h2oFrequency}</p>
            </Details>
          ) : (
            <UpdateContainer>
              <PlantChange values={values} change={change} />
            </UpdateContainer>
          )}
        </div>
        {!updatingPlant ? (
          <FormButton
            sx={{ mt: 3, mb: 2 }}
            size="large"
            color="secondary"
            fullWidth
            onClick={() => setUpdatingPlant(true)}
          >
            {"Update"}
          </FormButton>
        ) : (
          <>
            <FormButton
              sx={{ mt: 3, mb: 2 }}
              size="large"
              color="secondary"
              fullWidth
              onClick={() => setUpdatingPlant(false)}
            >
              {"Cancel"}
            </FormButton>
            <FormButton
              sx={{ mt: 0, mb: 2 }}
              size="large"
              color="secondary"
              fullWidth
              onClick={updatePlant}
            >
              {"Confirm"}
            </FormButton>
          </>
        )}
        <FormButton
          sx={{ mt: 0, mb: 2 }}
          size="large"
          color="secondary"
          fullWidth
          onClick={deletePlant}
        >
          {"Delete"}
        </FormButton>
      </AppForm>
    </React.Fragment>
  )
}

const Details = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UpdateContainer = styled.div`
  width: 100%;
  margin-top: -150px;
  margin-bottom: -100px;
`

export default withRoot(PlantDetails)
