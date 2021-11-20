import React from "react"
import AddPlant from "./AddPlant"
import Typography from "./Typography"
import FormButton from "../modules/FormButton"
import styled from "styled-components"

function PlantForm(props) {
  const { values, submit, change, disabled, errors } = props

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  const onChange = (evt) => {
    const { name, value } = evt.target
    change(name, value)
  }

  return (
    <React.Fragment>
      <AddPlant>
        <React.Fragment>
          <Typography
            variant="h4"
            gutterBottom
            marked="center"
            align="center"
            color="#fff"
          >
            Plant Database
          </Typography>
        </React.Fragment>
        <form className="form-container" onSubmit={onSubmit}>
          <h4 style={{ color: "#fff" }}>Add plant to database:</h4>

          <InputWrapper>
            <Input
              value={values.nickname}
              onChange={onChange}
              name="nickname"
              type="text"
              placeholder="Nickname"
            />
            <Input
              value={values.species}
              onChange={onChange}
              name="species"
              type="text"
              placeholder="Species"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              value={values.h2oFrequency}
              onChange={onChange}
              name="h2oFrequency"
              type="text"
              placeholder="Water Freq."
            />
            <Input
              value={values.imageURL}
              onChange={onChange}
              name="imageURL"
              type="text"
              placeholder="Image URL"
            />
          </InputWrapper>
          <FormButton
            disabled={disabled}
            sx={{ mt: 3, mb: 2 }}
            size="large"
            color="secondary"
            fullWidth
          >
            {"Add"}
          </FormButton>
        </form>
        <Errors>
          <div>{errors.nickname}</div>
          <div>{errors.species}</div>
          <div>{errors.h2oFrequency}</div>
        </Errors>
      </AddPlant>
    </React.Fragment>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
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
    color: gray;
  }
`

const Errors = styled.div`
  color: red;
`

export default PlantForm
