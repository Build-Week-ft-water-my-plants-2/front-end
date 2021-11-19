import React from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router"

const Cogratulations = () => {
  const { push } = useHistory()
  const continueFunc = () => {
    push("/landing")
  }
  return (
    <div>
      <h1>Congratulations you have successfully signed up!</h1>
      <button onClick={continueFunc}>continue</button>
    </div>
  )
}

export default Cogratulations
