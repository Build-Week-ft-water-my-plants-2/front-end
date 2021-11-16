import React from 'react'


function Plant({ details }) {
  if (!details) {
    return <h3>Working fetching your plant&apos;s details...</h3>
  }

  return (
    <div className='plant container'>
      <h2>{details.id}</h2>
      <p>Nickname: {details.nickname}</p>
      <p>Species: {details.species}</p>
      <p>Watering Frequency: {details.h2oFrequency}</p>
      <img src = {details.imageURL} alt='123' />
    </div>
  )
}

export default Plant