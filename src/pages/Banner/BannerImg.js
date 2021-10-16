import React from "react";
import {
  Button,
  Carousel,
  FormControl,
  Image,
  InputGroup,
} from "react-bootstrap";
import bannerImg from "../../data/bannerbackground.png";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import TabsNav from "../TabsNav/TabsNav";
import "./Banner.css";

const BannerImg = () => {
  return (
    <div>
      <Menu/>
      <div className="background">
        <div className="search-box">
          <h1 className="text-center">Healthy food waiting for you</h1>
          {/* <input
            className="search-field"
            type="text"
            placeholder="Search food"
          />
          <button className="btn btn-danger mb-2 ">Search</button> */}
          <InputGroup className="mb-3 search-field">
            <FormControl
              
              size="sm"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button className="fw-bold" variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
      <TabsNav/>
    </div>
  );
};

export default BannerImg;
