import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const numberOfPages = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, numberOfPages + 1);

  if (pages.length === 1) return null;

  return (
    <nav>
      <ul className="pagination flex-m flex-w p-t-26 m-1">
        {pages.map((x) => (
          <li
            key={x}
            className={
              x === currentPage
                ? "item-pagination flex-c-m trans-0-4 active-pagination"
                : "item-pagination flex-c-m trans-0-4"
            }
            style={{ cursor: "pointer" }}
            onClick={() => onPageChange(x)}
          >
            {x}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
