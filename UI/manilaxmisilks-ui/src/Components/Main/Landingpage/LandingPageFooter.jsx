import React from "react";

const LandingPageFooter = () => {
  return (
    <React.Fragment>
      <footer className="site-footer bg-white">
        <div className="container">
          <h2 className="footer-heading mb-1">About Us</h2>
          <p>
            We are renowned manufacturer, exporter, trader and supplier of
            Cotton Sarees, Silk Sarees, Handloom Silk Sarees, Silk Cotton
            Sarees, Handloom Silk Cotton Sarees and Pure Cotton Sarees with
            experience of over 50 years. These products are tailored using fine
            grade of fabrics that are sourced from authentic vendors only. We
            deliver our traditional values all over the world with minimal
            shipping charges.
          </p>

          <div className="row  text-center mt-1">
            <div className="col-md-12">
              <div className="m-1">
                <i className="fa fa-phone pl-3 pr-3" aria-hidden="true">
                  &emsp;+91-8798798232
                </i>

                <i className="fa fa-envelope-o pl-3 pr-3" aria-hidden="true">
                  &emsp;info@manilaxmisilks.in
                </i>
              </div>
              <div className="mt-1">
                <a
                  href="https://goo.gl/maps/XSetqUYP89zEtUAX8"
                  target="_blank"
                  className="pl-3 pr-3"
                >
                  <i
                    className="fa fa-map-marker pl-0 pr-3"
                    aria-hidden="true"
                  />
                </a>
                <a href="#" className="pl-3 pr-3">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="#" className="pl-3 pr-3">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="#" className="pl-3 pr-3">
                  <i className="fa fa-google" aria-hidden="true" />
                </a>
              </div>

              <div className="border-top pt-1">
                <p>
                  &copy; 2020 | This site is Developed and maintained with ❤ by{" "}
                  <a
                    href="https://www.linkedin.com/in/fasilmarshooq/"
                    target="_blank"
                  >
                    Fasil
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default LandingPageFooter;
