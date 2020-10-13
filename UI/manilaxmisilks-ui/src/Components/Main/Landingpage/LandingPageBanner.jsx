import React from "react";
import { Link } from "react-router-dom";

const LandingPageBanner = () => {
  return (
    <React.Fragment>
      <div
        className="site-blocks-cover overlay"
        style={{
          backgroundImage: "url('assets/LandingPage/images/lp1.JPG')",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="row mb-4">
                <div className="col-md-7">
                  <h3>Partner With Us</h3>
                  <p className="mb-5 lead">
                    Become our trusted partner and join the commnuity of over
                    5000+ resellers with exclusive access to our proudcts.
                  </p>
                  <div>
                    <Link
                      to="/Login"
                      className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
                    >
                      LogIn
                    </Link>
                    <Link
                      to="/RegisterUser"
                      className="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block"
                    >
                      Join us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPageBanner;
