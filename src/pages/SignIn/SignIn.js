import React from "react";
// import useAuth from "../../hooks/useAuth";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import "./SignIn.css";

const SignIn = () => {
  const { signInWithGoogle, user } = useAuth();

  return (
    <div className="signIn-body">
      <Menu/>
      <form className="container h-50  bg-light p-4 mt-5 rounded">
        <h3>Sign In</h3>
        <h4>{ user.displayName}</h4>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label
              className="custom-control-label mt-2 ms-2"
              htmlFor="customCheck1"
            >
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn button btn-primary btn-block">
          Submit
        </button>
        <button
          onClick={signInWithGoogle}
          type="submit"
          className="btn button btn-outline-danger btn-block"
        >
          Sign in with Google
        </button>
        <button
          type="submit"
          className="btn button  btn-outline-dark btn-block"
        >
          Sign in with Github
        </button>

        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      <Footer/>
    </div>
  );
};

export default SignIn;
