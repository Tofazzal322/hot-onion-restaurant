import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerImg from '../Banner/BannerImg';
import Footer from '../Footer/Footer';
import './TabsNav.css'

const TabsNav = () => {
    return (
        <div>
           {/* <BannerImg /> */}
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link>
              <Link exact={true} activeClassName='is-active' className="tabs-nav" to="/breakfast">Breakfast</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="tabs-nav" to="/lunch">Lunch</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="tabs-nav" to="/dinner">Dinner</Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Breakfast /> */}
      {/* <Lunch /> */}
      {/* <Dinner /> */}
      {/* <Footer />  */}
        </div>
    );
};

export default TabsNav;