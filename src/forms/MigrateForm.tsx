import styled from "styled-components"
import Container from "../components/Container"
import { useForm } from "react-hook-form"

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const MigrateForm = () => {
  const form = useForm({
    defaultValues: {},
    reValidateMode: "onChange",
  })
  const { formState } = form

  return (
    <Wrapper>
      <form
        onSubmit={() => {}}
        style={{ display: formState.isSubmitted ? "none" : "block" }}
      >
        <Container sm>{/* TODO */}</Container>
      </form>
    </Wrapper>
  )
}

export default MigrateForm
