"use strict";

import React from "react";
import ReactDOM from "react-dom";
import FiltrebleProductTable from "./components/FiltrebleProductTable.js";

// ReactDOM.render(<App />, document.getElementById("root"));

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  },
  {
    category: "Foods",
    price: "$1.34",
    stocked: false,
    name: "Milk"
  }
];

ReactDOM.render(
  <FiltrebleProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
