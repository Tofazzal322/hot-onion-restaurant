import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import "./Breakfast.css";
import { Card, CardGroup, Col, Collapse, Row } from "react-bootstrap";
import BannerImg from "../Banner/BannerImg";
import Footer from "../Footer/Footer";
import useData from "../../hooks/useData";

const Breakfast = () => {
  const [ foods ] = useData();
  // console.log(foods);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BannerImg />
      <div className="container">
        <Row className="container ">
          <h2 className="text-center">Breakfast menu</h2>
          <CardGroup className="mt-3">
            {foods?.slice(11, 18)?.map((food) => (
              <Col xs={12} md={3} lg={2} className=" g-4 ">
                <Card className="gh-2">
                  <Card.Img
                    className="card-img"
                    variant="top w-50"
                    src={food.img}
                  />
                  <Card.Body>
                    <Card.Title>{food.title}</Card.Title>
                    <Card.Title> Price: {food.price}</Card.Title>
                    <Card.Text>{food.description.slice(0, 50)}  <Button
                    className="btn btn-warning mb-3"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    More
                  </Button></Card.Text>
                  </Card.Body>
                  {/* <Button
                    className="btn btn-warning mb-3"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    View Details
                  </Button> */}
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      {food.description}
                    </div>
                  </Collapse>
                  {/* <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer> */}
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Breakfast;
