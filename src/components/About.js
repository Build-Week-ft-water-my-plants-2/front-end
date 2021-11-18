import React from "react"
import Button from "./Button"
import Typography from "./Typography"
import AboutLayout from "./AboutLayout"

const backgroundImage =
  "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"

function About() {
  return (
    <AboutLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        WATER MY PLANTS
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        For plant lovers by plant lovers like you.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up"
        sx={{ minWidth: 200 }}
      >
        Sign Up
      </Button>
    </AboutLayout>
  )
}

export default About
