import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const CartDetails = ({
  cart,
  setCart,
  // pri,
  // setPri,
  checkAmount,
  buyOnegetOne,
}) => {
  const [price, setPrice] = useState(0);

  const removeItem = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;

    cart.map((item) => {
      total += item.amount * item.price;
    });

    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="container">
        {" "}
        <br />
        <br />
        <h2>Cart Page</h2>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Increase/Decrease</th>
              <th> Total</th>
              <th> Size</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <>
                  {" "}
                  <tr>
                    <td>
                      <img
                        alt=""
                        variant="top"
                        src={item.img}
                        style={{ width: "6rem" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>

                    <td>
                      {" "}
                      <div>
                        <Button
                          onClick={() => {
                            checkAmount(item, 1);
                            buyOnegetOne(item);
                          }}
                          className="btn btn-success"
                          style={{ margin: "15px" }}
                        >
                          +
                        </Button>

                        <Form.Label>{item.amount}</Form.Label>
                        <Button
                          onClick={() => checkAmount(item, -1)}
                          className="btn btn-danger"
                          style={{ margin: "15px" }}
                        >
                          -
                        </Button>
                      </div>
                    </td>
                    <td>{item.price * item.amount}</td>
                    <td>{item.size}</td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <h2>Total Amount: {price} </h2>
      </div>
    </>
  );
};

export default CartDetails;
