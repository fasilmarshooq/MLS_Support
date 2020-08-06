import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const numberOfPages = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, numberOfPages + 1);

  if (pages.length === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm justify-content-center">
        {pages.map((x) => (
          <li
            key={x}
            className={x === currentPage ? "page-item active" : "page-item"}
          >
            <button onClick={() => onPageChange(x)} className="page-link">
              {x}
            </button>
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
