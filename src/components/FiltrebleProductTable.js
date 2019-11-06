import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";

export default class FiltrebleProductTable extends React.Component {
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
