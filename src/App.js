import React from "react"
import { Route, Switch } from "react-router-dom"
import About from "./components/About"
import Signup from "./components/Signup"
import Login from "./components/Login"
import withRoot from "./withRoot"

import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import AppBar from "./components/AppBar"
import Toolbar from "./components/Toolbar"

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
}

function App() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"Water My Plants"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/sign-up"
              sx={{ ...rightLink, color: "secondary.main" }}
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

export default withRoot(App)
