import React from 'react';

import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import AnimatedRouter from "../../Components/AnimatedRouter/AnimatedRouter";

const RegisterPage = () => {
  return (
    <AnimatedRouter>
      <RegisterForm />
    </AnimatedRouter>
  );
};

export default RegisterPage;