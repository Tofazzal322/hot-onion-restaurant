import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BannerImg from "../Banner/BannerImg";
import { Spinner } from "react-bootstrap";
import Foods from "../Foods/Foods";

const Home = () => {
  return (
    <>
      <BannerImg/>
      <Foods></Foods>
      <Spinner/>
      <Footer/>
    </>
  );
};

export default Home;
