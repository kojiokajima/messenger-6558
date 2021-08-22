import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PageContainer, FormAreaContainer, Hero, Option, LoginForm } from "./components/SignInSignUp/index";
import { login } from "./store/utils/thunkCreators";

const Login = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await dispatch(login({ username, password }));
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <PageContainer>
      <Hero />
      <FormAreaContainer>
        <Option text={"Don't have an account?"} link={"/register"} linkText={"Create account"} />
        <LoginForm handleSubmit={handleLogin} />
      </FormAreaContainer>
    </PageContainer>
  );
};

export default Login;
