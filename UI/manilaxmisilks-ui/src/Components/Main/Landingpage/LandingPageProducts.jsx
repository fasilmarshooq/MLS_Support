import React from "react";
import LandingPageProductItem from "./LandingPageProductItem";

const LandingPageProducts = () => {
  return (
    <React.Fragment>
      <div className="site-section" id="products-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h3 className="section-sub-title">Popular Products</h3>
              <h2 className="section-title mb-3">Our Products</h2>
              <p>
                Bringing forth a wide range of quality products like Silk
                Sarees, Handloom Silk Sarees, Silk Cotton Sarees and Pure Cotton
                Sarees desgined with love and weaved with passion.
              </p>
            </div>
          </div>
          <div className="row">
            <LandingPageProductItem
              img={"assets/landingpage/images/puresilk.jpg"}
              Title={"Handloom Pure Silk"}
              Description={""}
            />
            <LandingPageProductItem
              img={"assets/landingpage/images/silkCotton.jpg"}
              Title={"Silk cotton"}
              Description={""}
            />
            <LandingPageProductItem
              img={"assets/landingpage/images/artSilk.jpg"}
              Title={"Art Silk"}
              Description={""}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPageProducts;
