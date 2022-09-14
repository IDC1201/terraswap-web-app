import React from "react"
import Container from "../components/Container"
import SwapPage from "../components/SwapPage"
import MigrateForm from "../forms/MigrateForm"

const Migrate = () => {
  return (
    <Container>
      <SwapPage>
        <MigrateForm />
      </SwapPage>
    </Container>
  )
}

export default Migrate
