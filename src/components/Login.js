import React from 'react'

function Login(props) {
  const { values, submit, update, disabled, errors } = props
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
    <form className='login-wrapper' onSubmit={onSubmit}>
      
      {/* image placeholder */}
      <div className='img-container'>
        <img src="#" alt="logo"/>
      </div>
      <div className='background-img'>
        <img src="#" alt="logo"/>
      </div>

      {/* login card */}
      <div className='form-wrapper'>
        <h2>LOGIN</h2>
        <label>
          <input
            value={values.username}
            onChange={onChange}
            placeholder='Username'
            name='username'
            type='text'
          />
        </label>
        <label>
          <input
            value={values.password}
            onChange={onChange}
            placeholder='Password'
            name='password'
            type='password'
          />
        </label>

        { /** disable button */}
        <div className='form-group submit'>
          <button disabled={disabled}>Register</button>
          <div className='errors'>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
          </div>
        </div>

        <div className='account-bot'>
          <h2>
            Don't have account yet? <span>REGISTER</span>
          </h2>
          <button className='submit-login'>LOGIN</button>
        </div>
      </div>
    </form>
  )
}

export default Login


//** Styling below */