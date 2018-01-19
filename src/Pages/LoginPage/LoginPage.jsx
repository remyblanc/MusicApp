import React from 'react';

import LoginForm from "../../Components/LoginForm/LoginForm";
import AnimatedRouter from "../../Components/AnimatedRouter/AnimatedRouter";

const LoginPage = () => {
    return (
      <AnimatedRouter>
          <LoginForm />
      </AnimatedRouter>
    );
};

export default LoginPage;