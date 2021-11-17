import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import About from "./components/About"
import Signup from "./components/Signup"
import Login from "./components/Login"
import PlantPage from "./components/Landing"
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
  const [loggedIn, setLoggedIn] = useState(
    !!window.localStorage.getItem("token")
  )

  const refreshLoggedIn = () => {
    setLoggedIn(!!window.localStorage.getItem("token"))
  }

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
          {loggedIn && (
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/landing"
                sx={rightLink}
              >
                {"Plants"}
              </Link>
              <Link
                onClick={() => window.localStorage.removeItem("token")}
                variant="h6"
                underline="none"
                href="/"
                sx={{ ...rightLink, color: "secondary.main" }}
              >
                {"Log out"}
              </Link>
            </Box>
          )}
          {!loggedIn && (
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
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <PrivateRoute path="/landing" component={PlantPage} />
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/sign-up">
          <Signup refreshLoggedIn={refreshLoggedIn} />
        </Route>
        <Route path="/login">
          <Login refreshLoggedIn={refreshLoggedIn} />
        </Route>
      </Switch>
    </div>
  )
}

export default withRoot(App)
