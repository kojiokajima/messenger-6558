import React from "react"
import { FormContainer, FormButton, FormInput } from "./index"

const SignUpForm = (props) => {
  return (
    <FormContainer
      title={"Create an account"}
      handleSubmit={props.handleSubmit}
    >
      <FormInput
        label={"Username"}
        ariaLabel={"Username"}
        name={"username"}
        type={"text"}
        isRequired={true}
        hasValidation={false}
      />
      <FormInput
        label={"E-mail address"}
        ariaLabel={"passwE-mail addressord"}
        name={"email"}
        type={"email"}
        isRequired={true}
        hasValidation={false}
      />
      <FormInput
        label={"Password"}
        ariaLabel={"Password"}
        name={"password"}
        type={"password"}
        isRequired={true}
        hasValidation={true}
        formErrorMessage={props.formErrorMessage}
      />
      <FormInput
        label={"Confirm Password"}
        ariaLabel={"Confirm Password"}
        name={"confirmPassword"}
        type={"password"}
        isRequired={true}
        hasValidation={true}
        formErrorMessage={props.formErrorMessage}
      />
      <FormButton label={"Create"} />
    </FormContainer>
  )
}

export default SignUpForm
