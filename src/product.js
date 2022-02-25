import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  console.log(id, "s");
  return (
    <>
      <div className="col">
        {" "}
        <div className="row">
          {" "}
          <Card style={{ width: "18rem" }} className="card-body text-center">
            <div>
              <Card.Img variant="top" src="" />
            </div>

            <Card.Body>
              <Card.Title>kjkkj{id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rs: {3}</Card.Subtitle>
              <Card.Text>nnjb</Card.Text>
              <select
                style={{ margin: "10px" }}
                // onChange={(e) => {
                //   setSize(e.target.value);
                // }}
              >
                {/* {size.map((x) => {
                  return <option value={x}>{x}</option>;
                })} */}
              </select>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
