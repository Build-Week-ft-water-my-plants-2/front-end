import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"

ReactDOM.render(
  <Router>
    <React.Fragment>
      <CssBaseline>
        <App />
      </CssBaseline>
    </React.Fragment>
  </Router>,
  document.getElementById("root")
)
