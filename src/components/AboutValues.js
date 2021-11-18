import * as React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "./Typography"

import plant1 from "../images/plant1.png"

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
}

function AboutValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#fff" }}
    >
      <Container sx={{ mt: 10, mb: 20, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={plant1}
                alt="plant"
                sx={{ height: 200 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                JOIN
              </Typography>
              <Typography variant="h5">
                {"A community of plant lovers from around the globe"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={plant1}
                alt="plant"
                sx={{ height: 200 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                LEARN
              </Typography>
              <Typography variant="h5">
                {"From a growing database of plants around the globe"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={plant1}
                alt="plant"
                sx={{ height: 200 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                CONTRIBUTE
              </Typography>
              <Typography variant="h5">
                {"Your knowledge to our informative database"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutValues
