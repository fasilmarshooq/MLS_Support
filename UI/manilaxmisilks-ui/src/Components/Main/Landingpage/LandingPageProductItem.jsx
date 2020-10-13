import React from "react";
import { Link } from "react-router-dom";
const LandingPageProductItem = ({ img, Title, Description }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <div className="product-item">
        <figure>
          {" "}
          <img src={img} alt="Image" className="img-fluid" />
        </figure>

        <div className="px-4">
          <h3>{Title}</h3>

          <p className="mb-4">{Description}</p>
          <div>
            <Link
              to="/Products"
              className="btn btn-black btn-outline-black ml-1 rounded-0"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageProductItem;
