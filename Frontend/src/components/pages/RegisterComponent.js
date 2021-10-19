import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { useDispatch /*, useSelector */ } from "react-redux";
import { RegisterAction } from "../../redux/actions/AuthActions";

import { Link, useHistory } from "react-router-dom";

import InputField from "../form/InputField";
import { schemaForRegisterForm } from "../../utils/formSchema";
import Logo from "../../assets/images/Logo.png";
import JUR from "../../assets/images/JUR.png";

function RegisterComponent() {
  const history = useHistory();

  const dispatch = useDispatch();

  const UserRegister = (value, { resetForm }) => {
    resetForm({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      agree_terms: false,
    });
    // const passwordMatch = checkPasswordMatch(
    //   value.password,
    //   value.password_confirmation
    // );

    // if (passwordMatch === true) {
    //   return;
    // }
    dispatch(RegisterAction(value, history));
  };

  const checkPasswordMatch = (password, password_confirmation) => {
    return password !== password_confirmation ? true : false;
  };
  return (
    <div className="flex w-full min-h-screen auth-content">
      <div className="w-full max-w-lg left-side">
        <Link to="/">
          <img className="align-middle" alt="jur_logo" title="jur" src={Logo} />
        </Link>
        <h2 className="mt-16">Become a modern arbitrator, Now.</h2>
        <div className="img-container">
          <img src={JUR} alt="jur" className="" />
        </div>
      </div>
      <div className="relative flex w-full right-side">
        <div className="absolute" style={{ top: 40, right: 72 }}>
          <span className="text-opacity-md">
            Already a member? <Link to="/user/login">Sign In</Link>
          </span>
        </div>
        <div className="w-full max-w-lg m-auto form-wrapper">
          <h3>Sign Up</h3>
          <p className="mt-2 text-opacity-sm">Let’s get started with Jur </p>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password_confirmation: "",
              agree_terms: false,
            }}
            validationSchema={schemaForRegisterForm}
            validateOnMount
            onSubmit={UserRegister}
          >
            {({ isSubmitting, isValid, values }) => {
              const disabled = !isValid || isSubmitting || !values.agree_terms;
              return (
                <Form>
                  <div className="grid items-end grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                    <Field
                      component={InputField}
                      label="Full Name"
                      name="first_name"
                      placeholder="First Name"
                      id="first_name"
                      type="text"
                    />
                    <Field
                      component={InputField}
                      label=""
                      name="last_name"
                      placeholder="Last Name"
                      id="last_name"
                      type="text"
                    />
                  </div>
                  <Field
                    component={InputField}
                    label="Email Address"
                    name="email"
                    id="email"
                    type="email"
                  />
                  <Field
                    component={InputField}
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                  />
                  <Field
                    component={InputField}
                    label="Verify Password"
                    name="password_confirmation"
                    id="password_confirmation"
                    type="password"
                  />
                  <Field
                    component={InputField}
                    label={
                      <>
                        I agree to the <Link to="/">terms</Link> and{" "}
                        <Link to="/">conditions</Link>
                      </>
                    }
                    name="agree_terms"
                    id="agree_terms"
                    type="checkbox"
                  />

                  <div className="mt-6 form-group">
                    <button
                      type="submit"
                      className={`form-submit ${disabled ? "disabled" : ""}`}
                      disabled={disabled}
                    >
                      Sign In
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
