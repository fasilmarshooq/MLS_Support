import React, { Component } from "react";
import "../../../MainCatalog.css";
import "../../../MainCatalogUtil.css";
import _ from "lodash";
import { paginate } from "../../../Utils/Paginate";
import MainCatalogNavBar from "./MainCatalogNavBar";
import MainCatalogFilterArea from "./MainCatalogFilterArea";
import ProductBlock from "./ProductBlock";
import { GetProducts, GetCategories } from "../../../Services/productService";
import { trackPromise } from "react-promise-tracker";
import Pagination from "../../Common/Pagination";

class MainCatalog extends Component {
  state = {
    data: [],
    categories: [],
    sortColumn: { path: "Id", order: "desc" },
    currentCategory: "All",
    searchText: "",
    pageSize: 30,
    currentPage: 1,
  };

  async getData() {
    const data = await GetProducts();
    const categories = await GetCategories();
    this.setState({ data, categories, isLoaded: true });
  }

  componentDidMount() {
    trackPromise(this.getData());
  }

  handleCategoryChange = (category) => {
    let searchText = "";
    this.setState({ currentCategory: category, searchText });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSearchTextChange = ({ currentTarget }) => {
    let searchText = currentTarget.value;
    this.setState({ searchText });
  };

  getPageData = () => {
    const {
      data,
      sortColumn,
      currentPage,
      currentCategory,
      pageSize,
      searchText,
    } = this.state;
    const filtered =
      currentCategory === "All"
        ? data.filter((x) =>
            x.ProductName.toLowerCase().includes(searchText.toLowerCase())
          )
        : data.filter(
            (x) =>
              x.Category === currentCategory &&
              x.ProductName.toLowerCase().includes(searchText.toLowerCase())
          );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedProducts = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginatedProducts };
  };

  render() {
    const { totalCount, data } = this.getPageData();
    return (
      <React.Fragment>
        <div className="animsition">
          <MainCatalogNavBar />

          <section className="bgwhite p-t-55 p-b-65">
            <div className="container">
              <div className="row">
                <MainCatalogFilterArea
                  categories={this.state.categories}
                  onCategoryChange={this.handleCategoryChange}
                  currentCategory={this.state.currentCategory}
                  searchText={this.state.searchText}
                  onSearchTextChange={this.handleSearchTextChange}
                />

                <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                  <div className="row">
                    {this.state.isLoaded &&
                      data.map((product) => (
                        <ProductBlock
                          MainImageUrl={product.MainImageUrl}
                          ProductName={product.ProductName}
                          Id={product.Id}
                          Price={product.Price}
                          Tag={product.Tag}
                        />
                      ))}
                  </div>
                  <Pagination
                    itemCount={totalCount}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={this.state.currentPage}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default MainCatalog;
