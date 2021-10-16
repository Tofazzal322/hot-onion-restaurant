import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card, Col, Collapse } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const FoodItem = ({ img, title, description, price , categories}) => {
    const history = useHistory()
    const [open, setOpen] = useState(false);

    const handleRoute = () => {
        history.push(`/foods/${title}`);
    }
    return (
        <Col xs={12} md={4} lg={3} className=" g-4">
        <Card className="gh-2">
                  <Card.Img
                    className="card-img"
                    variant="top w-50"
                    src={img}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title> Price: {price}</Card.Title>
                    <Card.Text>{description.slice(0, 50)}...<Button
                    className="btn "
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                  More
                  </Button></Card.Text>
                  </Card.Body>
                  <Button
                    className="btn btn-warning mb-3"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    View Details
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text p-2">
                      {description}
                    </div>
                  </Collapse>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
            </Col>
    )
}

export default FoodItem
