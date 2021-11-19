import React from "react"
import AddPlant from "./AddPlant"
import styled from "styled-components"

function PlantChange(props) {
  const { values, change } = props
  console.log(values)
  const onChange = (evt) => {
    const { name, value } = evt.target
    change(name, value)
  }

  return (
    <React.Fragment>
      <AddPlant>
        <h4 style={{ color: "#fff" }}>Update a plant:</h4>
        <InputWrapper>
          <label>
            Plant nickname:
            <Input
              value={values.nickname}
              onChange={onChange}
              name="nickname"
              type="text"
              placeholder="Nickname"
            />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            Plant species:
            <Input
              value={values.species}
              onChange={onChange}
              name="species"
              type="text"
              placeholder="Species"
            />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            Plant watering frequency:
            <Input
              value={values.h2oFrequency}
              onChange={onChange}
              name="h2oFrequency"
              type="text"
            />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label>
            Plant image URL:
            <Input
              value={values.imageURL}
              onChange={onChange}
              name="imageURL"
              type="text"
            />
          </label>
        </InputWrapper>
      </AddPlant>
    </React.Fragment>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: white;
  justify-content: center;
`

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #000;
  }
`

export default PlantChange
