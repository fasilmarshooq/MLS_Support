import React, { Component } from "react";
import { GetOrders, GetCouriers } from "./../../Services/ordersService";
import { paginate } from "../../Utils/Paginate";
import Pagination from "../Common/Pagination";
import OrdersTable from "./OrdersTable";
import _ from "lodash";
import OrdersModal from "./OrdersModal";
import { validateAuth } from "../../Services/adminLoginService";
import { Redirect } from "react-router-dom";

class Orders extends Component {
  state = {
    data: [],
    ResponseLoaded: false,
    sortColumn: { path: "Id", order: "asc" },
    pageSize: 15,
    currentPage: 1,
    searchText: "",
    modal: {
      show: false,
      order: {},
    },
    Couriers: [],
  };

  getData = async () => {
    const data = await GetOrders();
    const Couriers = await GetCouriers();

    this.setState({ data, Couriers });
  };

  componentWillMount() {
    this.getData();
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleCreate = () => {
    const modal = this.state.modal;
    modal["show"] = true;
    this.setState({ modal });
  };
  handlePopUpModalClose = () => {
    const modal = this.state.modal;
    modal.show = false;
    delete modal.order;
    this.getData();
    this.setState({ modal });
  };
  handleEdit = (Order) => {
    const modal = this.state.modal;
    modal.show = true;
    modal.order = Order;
    this.setState({ modal });
  };
  handleSearch = ({ currentTarget }) => {
    let { searchText } = this.state;
    searchText = currentTarget.value;

    this.setState({ searchText });
  };
  getTableData = () => {
    const { data, sortColumn, currentPage, pageSize, searchText } = this.state;
    const filtered =
      searchText === ""
        ? data
        : data.filter((x) =>
            x.OrderNumber.toLowerCase().includes(searchText.toLowerCase())
          );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedMovies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginatedMovies };
  };
  render() {
    const auth = validateAuth();
    if (!auth) return <Redirect to="/admin" />;
    const { totalCount, data } = this.getTableData();
    return (
      <React.Fragment>
        <div>
          <div className="container ">
            <div className="card border-secondary mb-5 card-style">
              <div className="card-header  card-header-sticky">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Search"
                    onChange={this.handleSearch}
                  />

                  <button
                    type="button"
                    className="login100-form-btn ml-2"
                    onClick={this.handleCreate}
                  >
                    Add
                    <i className="fa fa-plus ml-2" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <OrdersTable
                Orders={data}
                OnEdit={this.handleEdit}
                onSort={this.handleSort}
                sortColumn={this.state.sortColumn}
              />
              <Pagination
                itemCount={totalCount}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </div>

            <OrdersModal
              showModal={this.state.modal.show}
              handleModalClose={this.handlePopUpModalClose}
              data={this.state.modal.order}
              couriers={this.state.Couriers}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Orders;
