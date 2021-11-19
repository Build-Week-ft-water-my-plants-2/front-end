import React from "react"
import { useHistory } from "react-router"
import Paper from "./Paper"
import styled from "styled-components"

function Plant({ details }) {
  const { push } = useHistory()
  if (!details) {
    return <h3>Working fetching your plant&apos;s details...</h3>
  }

  return (
    <React.Fragment>
      <Container>
        <Paper
          background="light"
          sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
        >
          <Content onClick={() => push(`/landing/${details.id}`)}>
            <h2>{details.id}</h2>
            <p>Nickname: {details.nickname}</p>
            <p>Species: {details.species}</p>
            <p>Watering Frequency: {details.h2oFrequency}</p>

            {details.imageURL && (
              <img
                src={details.imageURL}
                alt="this is a plant"
                style={{ maxWidth: "300px" }}
              />
            )}
          </Content>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 1rem;
  margin-bottom: 2rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`

export default Plant
