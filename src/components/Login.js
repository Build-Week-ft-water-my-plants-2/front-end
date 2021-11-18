import React, { useState } from "react"
import url from "./URL"
import axios from "axios"
import { useHistory } from "react-router"
import Link from "@mui/material/Link"
import Typography from "./Typography"
import AppForm from "./AppForm"
import FormButton from "../modules/FormButton"
import withRoot from "../withRoot"
import styled from "styled-components"

const initialFormValues = {
  username: "",
  password: "",
}

function Login({ refreshLoggedIn }) {
  const { push } = useHistory()
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`${url}/api/users/login`, formValues)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        refreshLoggedIn()
        push("/landing")
      })
      .catch(() => {
        alert('username or password do not match. please try again.')
      })
  }

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {"Need an account? "}
            <Link
              href="/sign-up"
              align="center"
              underline="always"
              style={{ color: "white" }}
            >
              Sign up here.
            </Link>
          </Typography>
        </React.Fragment>
        <form className="login-wrapper" onSubmit={onSubmit}>
          {/* login card */}
          <div>
            <Input
              value={formValues.username}
              onChange={onChange}
              placeholder="Username"
              name="username"
              type="text"
            />
            <Input
              value={formValues.password}
              onChange={onChange}
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
          <FormButton
            sx={{ mt: 3, mb: 2 }}
            size="large"
            color="secondary"
            fullWidth
          >
            {"Sign In"}
          </FormButton>
        </form>
      </AppForm>
    </React.Fragment>
  )
}

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  // background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #000;
  }
`

export default withRoot(Login)
