import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../data/logo2.png"
import './Header.css'

const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3">Register</span>
            </div>
        </nav>
  );
};

export default Header;
