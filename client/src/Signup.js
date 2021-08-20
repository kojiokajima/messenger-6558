import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PageContainer, FormAreaContainer, Hero, Option, SignUpForm } from "./components/SignInSignUp/index";
import { register } from "./store/utils/thunkCreators";

const Signup = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await dispatch(register({ username, email, password }));
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <PageContainer>
      <Hero />
      <FormAreaContainer>
        <Option text={"Already have an account?"} link={"/login"} linkText={"Login"} />
        <SignUpForm handleSubmit={handleRegister} formErrorMessage={formErrorMessage} />
      </FormAreaContainer>
    </PageContainer>
  );
};

export default Signup;
