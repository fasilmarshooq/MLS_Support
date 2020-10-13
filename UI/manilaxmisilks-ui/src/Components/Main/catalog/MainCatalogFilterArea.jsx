import React from "react";

const MainCatalogFilterArea = ({
  categories,
  currentCategory,
  onCategoryChange,
  searchText,
  onSearchTextChange,
}) => {
  const categoryList = ["All"].concat(categories);
  return (
    <React.Fragment>
      <div className="col-sm-6 col-md-4 col-lg-3 ">
        <div className="leftbar p-r-20 p-r-0-sm">
          <div className="search-product pos-relative bo4 of-hidden">
            <input
              className="s-text7 size6 p-l-23 p-r-50"
              type="text"
              name="search-product"
              placeholder="Search Products..."
              value={searchText}
              onChange={onSearchTextChange}
            />

            <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
              <i className="fs-12 fa fa-search" aria-hidden="true"></i>
            </button>
          </div>

          <div className="p-t-22 bo3"> </div>
          <h4 className="m-text14 p-b-7">Categories</h4>

          <ul style={{ cursor: "pointer" }}>
            {categoryList.map((c) => (
              <li
                onClick={() => onCategoryChange(c)}
                className={
                  currentCategory === c
                    ? "p-t-4 s-text13 active1"
                    : "p-t-4 s-text13"
                }
              >
                {c}
              </li>
            ))}
          </ul>
          {/* <div class="filter-price p-t-22 p-b-50 bo3 mt-2">
            <span class="fa-stack ">
              <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
            </span>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainCatalogFilterArea;
