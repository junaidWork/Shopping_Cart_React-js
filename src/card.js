import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ item, checkProduct, checkSize, setSize }) => {
  const { id, title, description, price, img, size } = item;

  return (
    <>
      <div className="col">
        {" "}
        <div className="row">
          {" "}
          <Card style={{ width: "18rem" }} className="card-body text-center">
            <div>
              <Link to={`/product/${id}`} className="link">
                <Card.Img variant="top" src={img} />
              </Link>
            </div>

            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Rs: {price}
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <select
                style={{ margin: "10px" }}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                {size.map((x) => {
                  return <option value={x}>{x}</option>;
                })}
                <option selected>Select</option>
              </select>
              <Button variant="primary" onClick={() => checkProduct(item)}>
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cards;
