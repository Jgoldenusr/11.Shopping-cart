import "./custom-styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import { React, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  MyCart,
  ItemCarousel,
  Products,
  Footer,
} from "./components/components.js";

//responsiveness
//footer
const App = () => {
  /* jshint ignore:start */
  const [show, setShow] = useState(false);
  const [myItems, setMyItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const addToCart = function (newItem) {
    let tempItems = [...myItems];
    let itemIndex = myItems.findIndex((item) => item.name === newItem.name);

    if (itemIndex !== -1) {
      tempItems[itemIndex].qty += 1;
      setMyItems(tempItems);
    } else {
      tempItems.push(newItem);
      setMyItems(tempItems);
    }

    let total = 0;
    tempItems.forEach((item) => {
      total += item.prize * item.qty;
    });
    setGrandTotal(total);
  };

  const add = function (itemName) {
    let tempItems = [...myItems];
    let itemIndex = myItems.findIndex((item) => item.name === itemName);

    tempItems[itemIndex].qty++;
    setMyItems(tempItems);

    let total = 0;
    tempItems.forEach((item) => {
      total += item.prize * item.qty;
    });
    setGrandTotal(total);
  };

  const remove = function (itemName) {
    let tempItems = [...myItems];
    let itemIndex = myItems.findIndex((item) => item.name === itemName);

    tempItems[itemIndex].qty--;
    if (tempItems[itemIndex].qty <= 0) tempItems.splice(itemIndex, 1);
    setMyItems(tempItems);

    let total = 0;
    tempItems.forEach((item) => {
      total += item.prize * item.qty;
    });
    setGrandTotal(total);
  };

  return (
    <HashRouter>
      <Stack direction="vertical" className="Lato gradient min-vh-100">
        <Header setShow={setShow}></Header>
        <MyCart
          add={add}
          remove={remove}
          setShow={setShow}
          show={show}
          myItems={myItems}
          grandTotal={grandTotal}
        ></MyCart>
        <Routes>
          <Route path="/" element={<ItemCarousel />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
        </Routes>
        <Footer></Footer>
      </Stack>
    </HashRouter>
  );
  /* jshint ignore:end */
};

export default App;
