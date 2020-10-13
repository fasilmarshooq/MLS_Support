import React, { Component } from "react";
import _ from "lodash";
import ProductEntryTable from "./ProductEntryTable";
import { paginate } from "../../Utils/Paginate";
import Pagination from "../Common/Pagination";
import AdminNavBar from "./AdminNavBar";
import { GetProducts,DeleteProduct } from "./../../Services/productService";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

class ProductEntry extends Component {
  state = {
    data: [],
    sortColumn: { path: "Id", order: "desc" },
    searchText: "",
    pageSize: 50,
    currentPage: 1,
    count: 0,
  };

  getData = async () => {
    const data = await GetProducts();
    this.setState({ data });
  };

  componentDidMount() {
    trackPromise(this.getData());
  }
  handleEdit = (product) => {
    this.props.history.push(`/ProductEntryForm/${product.Id}`);
  };
  handleSearch = ({ currentTarget }) => {
    let { searchText } = this.state;
    searchText = currentTarget.value;

    this.setState({ searchText });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleDelete = (product) => {
    let data  = this.state.data;
    data = data.filter((p) => p.Id !== product.Id );
    this.setState({data});
    DeleteProduct(product.Id); 
  }

  getTableData = () => {
    const { data, sortColumn, currentPage, pageSize, searchText } = this.state;
    const filtered =
      searchText === ""
        ? data
        : data.filter((x) =>
            x.ProductName.toLowerCase().includes(searchText.toLowerCase())
          );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedProducts = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginatedProducts };
  };
  render() {
    const { totalCount, data } = this.getTableData();
    return (
      <React.Fragment>
        <AdminNavBar />
        <div>
          <div className="container ">
            <div className="card border-secondary mt-5 mb-5 card-style">
              <div className="card-header  card-header-sticky">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Search"
                    onChange={this.handleSearch}
                  />

                  <Link
                    to="/ProductEntryForm/new"
                    type="button"
                    className="login100-form-btn ml-2"
                    onClick={this.handleCreate}
                  >
                    Add
                    <i className="fa fa-plus ml-2" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              <ProductEntryTable
                Orders={data}
                OnEdit={this.handleEdit}
                onSort={this.handleSort}
                OnDelete={this.handleDelete}
                sortColumn={this.state.sortColumn}
              />
              <Pagination
                itemCount={totalCount}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductEntry;
