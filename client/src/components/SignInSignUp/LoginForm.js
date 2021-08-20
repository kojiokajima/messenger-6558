import React from "react"
import { FormContainer, FormButton, FormInput } from "./index"

const LoginForm = (props) => {
  return (
    <FormContainer title={"Welcome back!"} handleSubmit={props.handleSubmit}>
      <FormInput
        label={"Username"}
        ariaLabel={"Username"}
        name={"username"}
        type={"text"}
        isRequired={true}
        hasValidation={false}
      />
      <FormInput
        label={"Password"}
        ariaLabel={"Password"}
        name={"password"}
        type={"password"}
        isRequired={true}
        hasValidation={false}
      />
      <FormButton label={"Login"} />
    </FormContainer>
  )
}

export default LoginForm
