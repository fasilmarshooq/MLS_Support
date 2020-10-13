import React from "react";
import { useHistory } from "react-router-dom";

const ProductBlock = ({ MainImageUrl, ProductName, Id, Price, Tag }) => {
  let history = useHistory();
  let ProductDetailUrl = `./ProductDetails/${Id}`;
  function handleClick() {
    history.push(ProductDetailUrl);
  }
  const addToCart = false;
  let divblockLabelclass = "block2-img wrap-pic-w of-hidden pos-relative";
  divblockLabelclass = divblockLabelclass + " block2-label" + Tag;

  return (
    <React.Fragment>
      <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <div className="block2">
          <div className={divblockLabelclass}>
            <img src={MainImageUrl} alt="IMG-PRODUCT" />

            <div className="block2-overlay trans-0-4">
              <a
                href="./ProductDetails"
                className="block2-btn-addwishlist hov-pointer trans-0-4"
              >
                <i
                  className="icon-wishlist icon_heart_alt"
                  aria-hidden="true"
                ></i>
                <i
                  className="icon-wishlist icon_heart dis-none"
                  aria-hidden="true"
                ></i>
              </a>
              {
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  <button
                    onClick={handleClick}
                    className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                  >
                    View
                  </button>
                </div>
              }
            </div>
          </div>

          <div className="block2-txt p-t-20">
            <p className="block2-name dis-block s-text3 p-b-5">{ProductName}</p>

            <span className="block2-price m-text6 p-r-5">₹ {Price}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductBlock;
