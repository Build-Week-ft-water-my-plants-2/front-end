import React from "react"
import { useHistory } from "react-router"
function Plant({ details }) {
  const { push } = useHistory()
  if (!details) {
    return <h3>Working fetching your plant&apos;s details...</h3>
  }


  return (
    <div
      onClick={() => push(`/landing/${details.id}`)}
      className="plant container"
    >
      <h2>{details.id}</h2>
      <p>Nickname: {details.nickname}</p>
      <p>Species: {details.species}</p>
      <p>Watering Frequency: {details.h2oFrequency}</p>

      {details.imageURL && 
        <img
        src={details.imageURL}
        alt='this is a plant'
        style={{ maxWidth: "300px" }}
      />}
    </div> 
  )
}

export default Plant
