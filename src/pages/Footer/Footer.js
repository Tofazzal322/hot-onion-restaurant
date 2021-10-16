import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import {
  faFacebookSquare,
  faGoogle,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faAddressBook,
  faAddressCard,
  faHome,
  faImage,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "../../data/logo.png";

const Footer = () => {
  return (
    <div className="footer-container mt-5">
      <Container className="pt-4">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <img className=" w-25" src={footerLogo} alt="" />
              <div className="mt-4 all-icon">
                {/* <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
                <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                <FontAwesomeIcon className="icon" icon={faGoogle} /> */}
              </div>
              <div>
                {/* <p className="ps-3 mt-4 paragraph">
                  Muscat University received its formal license to operate from
                  the MOHERI in October 2016. The University has been
                  established with the assistance of Oxford University
                  Innovation Group with a view to becoming the leading provider
                  of Higher Level education in the region.{" "}
                </p> */}
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div>
              <div className=" quick-link-menu">
                <Link className="quick-link" to="/home">
                  <p>
                    {" "}
                    About online food
                  </p>
                </Link>
                <Link className="quick-link" to="/Courses">
                  <p>
                    {" "}
                    
                    Read our blogs
                  </p>
                </Link>
                <Link className="quick-link" to="/Gallery">
                  <p>
                    {" "}
                    
                    Sign up to deliver
                  </p>
                </Link>
                <Link className="quick-link" to="/Contact">
                  <p>
                    {" "}
                    {/* <FontAwesomeIcon
                      className="text-dark"
                      icon={faAddressBook}
                    />{" "} */}
                    Contact with us
                  </p>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <Link className="quick-link" to="/Contact">
              <p>Get help</p>
            </Link>{" "}
            <Link className="quick-link" to="/Contact">
              <p>Read FAQS</p>
            </Link>{" "}
            <Link className="quick-link" to="/Contact">
              <p>View all city's</p>
            </Link>{" "}
            <Link className="quick-link" to="/Contact">
              <p>Restaurant near me</p>
            </Link>{" "}
            <div>
              {/* <h1>
                Sign up <br /> For the newsletter
              </h1> */}
              {/* <input
                className="px-3"
                type="text"
                placeholder="Submit Your Email"
              /> */}
              {/* <div className="mt-2 ">
                <h4>Tel: 24645456, 2464 5473</h4>
                <p>
                  Hot Onion Restaurant <br />
                  PO Box 550,PC 130 Building 2089 <br />
                  AI Ghubra North Muscat,Sultanate of Oman. <br />
                  info@muscatuniversity.edu.om
                </p>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <div className="footer-copyright container bg-dark text-light pt-3 fs-6">
          <p className="copyright">Hot Onion © .2021 All rights reserved.</p>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
