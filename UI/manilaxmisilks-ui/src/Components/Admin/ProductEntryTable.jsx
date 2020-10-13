import React, { Component } from "react";
import Table from "../Common/Table";

class ProductEntryTable extends Component {
  columns = [
    {
      path: "Id",
      lable: "Id",
    },
    {
      path: "MainImageUrl",
      lable: "Image",
      img: true
    },
    { path: "ProductName", lable: "Name" },
    { path: "Price", lable: "Price" },
    { path: "Category", lable: "Category" },

    {
      path: "Edit",
      content: (Order) => (
        <button
          onClick={() => this.props.OnEdit(Order)}
          className="btn btn-light"
        >
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
      ),
    },

    {
      path: "Delete",
      content: (Order) => (
        <button
          onClick={() => this.props.OnDelete(Order)}
          className="btn btn-light"
        >
          <i className="fa fa-trash" style={{color:"red"}} aria-hidden="true"></i>
        </button>
      ),
    },
  ];
  render() {
    const { Orders, sortColumn, onSort } = this.props;
    return (
      <React.Fragment>
        <Table
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
          data={Orders}
        />
      </React.Fragment>
    );
  }
}

export default ProductEntryTable;
