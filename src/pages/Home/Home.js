import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BannerImg from "../Banner/BannerImg";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";
import { Container, Nav, Navbar } from "react-bootstrap";
import TabsNav from "../TabsNav/TabsNav";

const Home = () => {
  return (
    <div>
      <Breakfast />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
