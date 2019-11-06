import React, { Component } from "react";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";

export default class ProductTable extends React.Component {
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
