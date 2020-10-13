import React, { Component } from "react";
import "../../../LandingPage.css";
import LandingPagenavBar from "./LandingPageNavBar";
import LandingPageBanner from "./LandingPageBanner";
import LandingPageProducts from "./LandingPageProducts";
import LandingPageFooter from "./LandingPageFooter";

class LandingPage extends Component {
  state = {
    menu: false,
  };
  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    const show = this.state.menu ? "show" : "";
    return (
      <React.Fragment>
        <div className="site-wrap">
          <LandingPagenavBar show={show} toggleAction={this.toggleMenu} />
          <LandingPageBanner />
          <LandingPageProducts />
          <div
            className="site-blocks-cover inner-page-cover overlay get-notification"
            style={{
              backgroundImage: "url('assets/LandingPage/images/lp1.JPG')",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <form className="col-md-7">
                  <h2>We are Silk Mark Of India certified Organisation</h2>
                  <img
                    src="assets/landingpage/images/silkmark.png"
                    alt="Silk Mark Logo"
                    className="mb-2 mt-n2"
                  />
                  <p>
                    Silk Mark is an initiative by Central Silk Board (CSB),
                    Ministry of Textiles, Government of India.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <LandingPageFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
