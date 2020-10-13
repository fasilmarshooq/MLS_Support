import React, { Component } from "react";
import "../../../../MainCatalog.css";
import "../../../../MainCatalogUtil.css";
import MainCatalogNavBar from "../MainCatalogNavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GetProduct } from "../../../../Services/productService";
import { trackPromise } from "react-promise-tracker";


class ProductDetails extends Component {
  state = {
    data: [],
  };

  getData = async (productId) => {
    const data = await GetProduct(productId);
    if (data[0]) {
      this.setState({ data });
    }
  };

  downloadimage(img, key) {
    const productName = this.state.data[0].ProductName;
    var a = document.createElement("a");
    a.href = img;
    a.download = `${productName}_${key}.jpeg`;
    a.click();
  }

  handleImageDownload = () => {
    const images = this.state.data[0].Images;
    Object.entries(images).map(([key, value]) =>
      this.downloadimage(value, key)
    );
  };

  componentDidMount() {
    const productId = this.props.match.params.Id;
    trackPromise(this.getData(productId));
  }
  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <div className="animsition">
          <MainCatalogNavBar />
          {data[0] && (
            <div className="container bgwhite p-t-35 p-b-80">
              <div className="flex-w flex-sb">
                <div className="w-size13 p-t-30 respon5">
                  <div className="flex-sb flex-w">
                    <Carousel showArrows={true}>
                      {Object.entries(data[0].Images).map(([key, value]) => (
                        <div>
                          <img src={value} />
                        </div>
                      ))}
                    </Carousel>
                      <button
                      onClick={() => this.handleImageDownload()}
                      className=" flex-sb-m cs-pointer  color0-hov trans-0-4"
                    >
                      <i class="fa fa-download mr-1" aria-hidden="true"></i>
                      Download Images
                    </button>
                  </div>
                </div>

                <div className="w-size14 p-t-30 respon5">
                  <h4 className="product-detail-name m-text16 p-b-13">
                    {data[0].ProductName}
                  </h4>

                  <span className="m-text17">₹ {data[0].Price}</span>

                  <p className="s-text8 p-t-10">Category {data[0].Category}</p>

                  <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 ">
                    <h5 className=" flex-sb-m  m-text19 ">Description</h5>

                    <div className="dropdown-content p-t-15 p-b-23">
                      <p className="s-text8">{data[0].Description}</p>
                    </div>
                  </div>

                  <div className="wrap-dropdown-content  p-t-15 p-b-14 ">
                   
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
