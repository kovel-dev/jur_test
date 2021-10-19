import React from "react";
import { Formik, Form, Field } from "formik";

import { useDispatch /*, useSelector */ } from "react-redux";
import { LoginAction } from "../../redux/actions/AuthActions";
import { useHistory, Link } from "react-router-dom";
import InputField from "../form/InputField";

import { schemaForLoginForm } from "../../utils/formSchema";
import Logo from "../../assets/images/Logo.png";
import JUR from "../../assets/images/JUR.png";

function LoginComponent() {
  const history = useHistory();
  const dispatch = useDispatch();

  const UserLogin = (value) => {
    dispatch(LoginAction(value, history));
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
            New to Jur? <Link to="/user/register">Sign Up</Link>
          </span>
        </div>
        <div className="w-full max-w-lg m-auto form-wrapper">
          <h3>Sign In</h3>
          <p className="mt-2 text-opacity-sm">Let’s get started with Jur </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
              remember_me: false,
            }}
            validationSchema={schemaForLoginForm}
            validateOnMount
            onSubmit={UserLogin}
          >
            {({ isSubmitting, isValid }) => {
              const disabled = !isValid || isSubmitting;
              return (
                <Form>
                  <div className="mt-4">
                    <Field
                      component={InputField}
                      label="Email Address"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <Field
                    component={InputField}
                    label="Password"
                    name="password"
                    forgotPassword={true}
                    id="password"
                    type="password"
                  />
                  <div className="mt-1">
                    <Field
                      component={InputField}
                      label="Remember Me"
                      name="remember_me"
                      id="remember_me"
                      type="checkbox"
                    />
                  </div>

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

export default LoginComponent;
