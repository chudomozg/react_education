"use strict";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(<App />, document.getElementById("root"));

class FiltrebleProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnlyStockChange = this.handleOnlyStockChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = { search: "", onlyStock: false };
  }

  handleOnlyStockChange(filterStock) {
    this.setState({ onlyStock: filterStock });
  }

  handleSearchChange(searchString) {
    this.setState({ search: searchString });
  }

  //фильтр продуктов
  filterProduct(products, searchString, isOnlyStock) {
    return products
      .filter(item =>
        item.name.toLowerCase().startsWith(searchString.toLowerCase())
      ) //только товары имя которых начинается на строку поиска
      .filter(item => item.stocked || !isOnlyStock); //  только товары с stocked=true
  }

  render() {
    let filteredProducts = this.filterProduct(
      this.props.products,
      this.state.search,
      this.state.onlyStock
    );
    return (
      <div>
        <SearchBar
          onSearchChange={this.handleSearchChange}
          onOnlyStockChange={this.handleOnlyStockChange}
          search={this.state.search}
          onlyStock={this.state.onlyStock}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.id == "search_input") {
      this.props.onSearchChange(e.target.value);
    } else if (e.target.id == "onlyStock") {
      this.props.onOnlyStockChange(e.target.checked);
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          id="search_input"
          value={this.props.search}
        />
        <div>
          <input
            type="checkbox"
            onChange={this.handleChange}
            id="onlyStock"
            checked={this.props.onlyStock}
          />
          <label htmlFor="onlyStock">Only show products in stock</label>
        </div>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const PRODUCTS = this.props.products;
    let rows = []; //Строки в таблице товаров
    let categoryes = new Set(); //SET категорий
    for (let product of PRODUCTS) {
      //добавляем категории
      categoryes.add(product.category);
    }

    for (let category of categoryes) {
      //Добавляем строки в таблицу товаров
      rows.push(<ProductCategoryRow label={category} />); //Заголовок группы товаров
      for (let product of PRODUCTS) {
        if (product.category == category)
          //Товары этой категории
          rows.push(<ProductRow price={product.price} name={product.name} />);
      }
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          <b>{this.props.label}</b>
        </td>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

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

// ReactDOM.render(
//   <FiltrebleProductTable products={PRODUCTS} />,
//   document.getElementById("root")
// );
