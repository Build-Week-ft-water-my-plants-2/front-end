import React, { useState } from "react"
import url from "./URL"
import axios from "axios"
import { useHistory } from "react-router"

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
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  return (
    <form className="login-wrapper" onSubmit={onSubmit}>
      {/* image placeholder */}
      <div className="img-container">
        <img src="#" alt="logo" />
      </div>
      <div className="background-img">
        <img src="#" alt="logo" />
      </div>

      {/* login card */}
      <div className="form-wrapper">
        <h2>LOGIN</h2>
        <label>
          <input
            value={formValues.username}
            onChange={onChange}
            placeholder="Username"
            name="username"
            type="text"
          />
        </label>
        <label>
          <input
            value={formValues.password}
            onChange={onChange}
            placeholder="Password"
            name="password"
            type="password"
          />
        </label>

        {/** disable button */}
        <div className="form-group submit">
          <button>Login</button>
          <div className="errors"></div>
        </div>

        <div className="account-bot">
          <h2>
            Don't have account yet? <span>REGISTER</span>
          </h2>
        </div>
      </div>
    </form>
  )
}

export default Login

//** Styling below */
