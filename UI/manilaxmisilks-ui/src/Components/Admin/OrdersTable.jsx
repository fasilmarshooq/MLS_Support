import React, { Component } from "react";
import Table from "../Common/Table";

class OrdersTable extends Component {
  columns = [
    {
      path: "Id",
      lable: "Id",
    },
    { path: "OrderNumber", lable: "Order #" },
    { path: "Courier", lable: "Courier" },
    { path: "TrackingNumber", lable: "Tracking #" },

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

export default OrdersTable;
