import React, { useState } from "react"
import url from "./URL"
import axios from "axios"
import { useHistory } from "react-router"
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
    <div className="signup-wrapper">
      {/** image placeholder */}
      <div className="img-container">
        <img src="#" alt="logo" />
      </div>
      <div className="background-img">
        <img src="#" alt="logo" />
      </div>

      <form className="form-wrapper" onSubmit={onSubmit}>
        <h2>Register</h2>
        <label>
          <input
            value={formValues.phoneNumber}
            placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          <input
            value={formValues.username}
            placeholder="Username"
            name="username"
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          <input
            value={formValues.password}
            placeholder="Password"
            name="password"
            type="password"
            onChange={onChange}
          />
        </label>

        {/** disable button */}
        <div className="form-group submit">
          <button>Register</button>
          <div className="errors"></div>
        </div>

        <div className="account-bot">
          <h3>
            Already have an account? <span>LOGIN</span>
          </h3>
        </div>
      </form>
    </div>
  )
}

export default Signup

//** Styling goes here */
