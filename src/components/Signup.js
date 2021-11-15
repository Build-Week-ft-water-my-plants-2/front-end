import React from 'react'

// imports from react-router-dom go here //

const Signup = (props) => {

  const {values, submit, update, disabled, errors} = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const name = evt.target.name;
    const value  = evt.target;
    update(name, value);
  }

  return (
    <div className='login-wrapper'>

      {/** image placeholder */}
      <div className='img-container'>
        <img src="#" alt="logo"/>
      </div>
      <div className='background-img'>
        <img src="#" alt="logo"/>
      </div>

      <form className='form-wrapper' onSubmit={onSubmit}>
        <h2>Register</h2>
        <label>
          <input
            value={values.phoneNumber}
            placeholder='Phone Number'
            name='phoneNumber'
            type='text'
            onChange={onChange}
          />
        </label>
        <label>
          <input
            value={values.username}
            placeholder='Username'
            name='username'
            type='text'
            onChange={onChange}
          />
        </label>
        <label>
          <input
            value={values.password}
            placeholder='Password'
            name='password'
            type='password'
            onChange={onChange}
          />
        </label>

        { /** disable button */}
        <div className='form-group submit'>
          <button disabled={disabled}>Register</button>
          <div className='errors'>
            <div>{errors.phoneNumber}</div>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
          </div>
        </div>

        <div className = 'account-bot'>
          <h3>Already have an account? <span>LOGIN</span></h3>
        </div>

      </form>

    </div>
  )
}

export default Signup;

//** Styling goes here */
