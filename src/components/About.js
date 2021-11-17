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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
    // <DivBk>
    //   <div>
    //     <h1> Water My Plants 2 </h1>
    //     <img src={backgroundImage} alt="test" />
    //     <Ptg>
    //       <p>
    //         {" "}
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
    //         dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    //         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    //         ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    //         officia deserunt mollit anim id est laborum.
    //       </p>
    //     </Ptg>
    //   </div>
    // </DivBk>
  )
}

export default About
