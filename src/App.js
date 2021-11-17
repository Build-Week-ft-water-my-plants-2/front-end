import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import About from "./components/About"
import Signup from "./components/Signup"
import Login from "./components/Login"

import Box from "@mui/material/Box"
import AppBar from "./components/AppBar"
import Toolbar from "./components/Toolbar"

function App() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            to="/"
            style={{ fontSize: 24, textDecoration: "none", color: "inherit" }}
          >
            {"Water My Plants"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              to="/login"
              style={{
                fontSize: 18,
                textDecoration: "none",
                color: "inherit",
                marginRight: "1rem",
              }}
            >
              {"Login"}
            </Link>
            <Link
              to="/sign-up"
              style={{ fontSize: 18, textDecoration: "none", color: "inherit" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App
