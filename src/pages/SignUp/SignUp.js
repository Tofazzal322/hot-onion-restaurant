// import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
// import { Col, Form, Row } from "react-bootstrap";
// import {Logo} form "../../data/logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="signIn-body">
      <form className="container h-25 w-25 bg-light p-4 mt-5 rounded sm-12">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

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

        <button type="submit" className="btn button btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/signIn"> Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
