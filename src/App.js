import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import Carthome from "./Carthome";
import CartDetails from "./CartDetails";
import Navbar from "./navbar";
import Product from "./product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);
  const [sizee, setSize] = useState(["small"]);
  const [cartcount, setCartcount] = useState(true);
  // const [pri, setPri] = useState([]);
  console.log(cart, "cart");

  const checkProduct = (item) => {
    const { id, amount, title, description, price, img, size } = item;

    const item2 = {
      id: id + sizee,
      amount,
      title,
      description,
      price,
      img,
      size: sizee,
    };

    const check = cart
      .map(function (e) {
        return e.id;
      })
      .indexOf(item2.id);

    if (cart.length >= 1 && check !== -1) {
      return <>{alert("Product is Already Added")}</>;
    }
    setCart([...cart, item2]);
  };

  // const buyOnegetOne = (item) => {
  //   let p = 0;
  //   let r = 0;
  //   const result = cart.map((i) => {
  //     if (item.id == i.id) {
  //       const { price, amount } = i;
  //       r = Math.round(amount / 2);
  //       p = r * price;
  //       setPri(p);
  //       return p;
  //     }
  //   });
  // };

  const checkAmount = (item, num) => {
    const index = cart.indexOf(item);
    const array = cart;
    array[index].amount += num;

    if (array[index].amount === 0) array[index].amount = 1;
    setCart([...array]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Router>
            <Navbar setCartcount={setCartcount} cartsize={cart.length} />
            <Switch>
              <Route exact path="/">
                <Carthome
                  checkProduct={checkProduct}
                  setCart={setCart}
                  setSize={setSize}
                />
              </Route>
              <Route path="/product/:id">
                <Product cart={cart} setCart={setCart} />
              </Route>
              <Route exact path="/CartDetails">
                <CartDetails
                  cart={cart}
                  setCart={setCart}
                  checkAmount={checkAmount}
                  // pri={pri}
                  // setpri={setPri}
                  // buyOnegetOne={buyOnegetOne}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
