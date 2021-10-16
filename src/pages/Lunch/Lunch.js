import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import lunch1 from "../../data/lunch/lunch1.png";
import lunch2 from "../../data/lunch/lunch2.png";
import lunch3 from "../../data/lunch/lunch3.png";
import BannerImg from "../Banner/BannerImg";
import Footer from "../Footer/Footer";

const Lunch = () => {
  const [foods, setFoods] = useState([]);
console.log(foods);
    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/manik-roy/hot-onion-restaurant/master/src/fakeData/foodData.js')
        fetch('./foods.json')
            .then(res => res.json())
        .then(data=>setFoods(data))
    }, [])
  return (
    <div className="">
      <BannerImg/>
      <div className="container">
        <h2 className="text-center">Lunch menu</h2>
      <Row className="container "> 
        <CardGroup className="mt-3">
          {
            foods.slice(0,5)?.map(food => (
              <Col className="col-md-3 col-sm-12"> 
        <Card className="gh-2">
          <Card.Img className="card-img" variant="top w-50" src={food.img} />
          <Card.Body>
            <Card.Title>{food.title}</Card.Title>
            <Card.Title> Price: {food.price}</Card.Title>
            <Card.Text>
              {food.description.slice(0,50)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Col>
            ))
          }
        
      </CardGroup>
      </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default Lunch;
