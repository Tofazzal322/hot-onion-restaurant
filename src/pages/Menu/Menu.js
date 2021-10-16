import Button from "@restart/ui/esm/Button";
import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../data/logo2.png";
import "./Menu.css";

const Menu = () => {
  return (
    <Navbar className="navbar-body" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img className="logo-png" src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            {" "}
            <Link to="/home">
              <Badge bg="secondary"> 9</Badge>
              {/* <Button  variant="primary border-none">
                <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button> */}
            </Link>{" "}
          </Nav.Link>
          {/* <Nav.Link ><Link to="/breakfast">Breakfast</Link></Nav.Link> */}
          {/* <Nav.Link ><Link to="/lunch">Lunch</Link></Nav.Link> */}
          {/* <Nav.Link ><Link to="/dinner">Dinner</Link></Nav.Link> */}
          {/* <Nav.Link ><Link to="/signUp">Sign up</Link></Nav.Link> */}
          <Nav.Link>
            <Link className="button" to="/signIn">
              Sign in
            </Link>
          </Nav.Link>
          <Navbar.Text className="user-sign">
            Signed in as : <span href="#login">Mark Otto</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
