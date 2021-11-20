import React, { useState } from "react"
import url from "./URL"
import axios from "axios"
import { useHistory } from "react-router"
import Typography from "./Typography"
import AppForm from "./AppForm"
import FormButton from "../modules/FormButton"
import withRoot from "../withRoot"
import styled from "styled-components"
// imports from react-router-dom go here //

const initialFormValues = {
  username: "",
  password: "",
  phoneNumber: "",
}

function Signup({ refreshLoggedIn }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const { push } = useHistory()
  const onChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`${url}/api/users/signup`, formValues)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        console.log(res.data)
        refreshLoggedIn()
        push("/landing")
      })
      .catch((err) => {
        console.error(err)
      })
  }

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
            Register
          </Typography>
        </React.Fragment>
        <form className="login-wrapper" onSubmit={onSubmit}>
          {/* register card */}
          <InputWrapper>
          <Input
            value={formValues.phoneNumber}
            placeholder="123-456-7890"
            name="phoneNumber"
            type="tel"
            onChange={onChange}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
            <Input
              value={formValues.username}
              placeholder="Username"
              name="username"
              type="text"
              onChange={onChange}
            />
            <Input
              value={formValues.password}
              placeholder="Password"
              name="password"
              type="password"
              onChange={onChange}
            />
          </InputWrapper>
          <FormButton
            sx={{ mt: 3, mb: 2 }}
            size="large"
            color="secondary"
            fullWidth
          >
            {"Register"}
          </FormButton>
        </form>
      </AppForm>
    </React.Fragment>
  )
}

export default withRoot(Signup)

const InputWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
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
