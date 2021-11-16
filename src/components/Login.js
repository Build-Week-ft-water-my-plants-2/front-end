import React from "react"

function Login(props) {
  const { values, submit, update } = props
  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }
  const onChange = (evt) => {
    const name = evt.target.name
    const value = evt.target
    update(name, value)
  }

  return (
    <form className="login-wrapper" onSubmit={onSubmit}>
      {/* PLACEHOLDER FOR IMAGES */}
      <div className="img-container"></div>
      <div className="background-img"></div>

      {/* LOGIN CARD */}
      <div className="form-wrapper">
        <h2>LOGIN</h2>
        <label>
          <input
            value={values.username}
            onChange={onChange}
            placeholder="Username"
            name="username"
            type="text"
          />
        </label>
        <label>
          <input
            value={values.password}
            onChange={onChange}
            placeholder="Password"
            name="password"
            type="password"
          />
        </label>
        <div className="account-bot">
          <h2>
            Don't have account yet? <span>REGISTER</span>
          </h2>
          <button className="submit-login">LOGIN</button>
        </div>
      </div>
    </form>
  )
}

export default Login
