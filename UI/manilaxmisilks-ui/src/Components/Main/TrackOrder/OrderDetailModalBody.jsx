import React from "react";

const OrderDetailModalBody = ({ data }) => {
  if (!data[0])
    return (
      <p>
        Ooops!! No deatil for this order yet, Please Try again later or Verify
        your order number with our executives
      </p>
    );
  return (
    <div>
      <article className="card">
        <div className="card-body">
          <h6>Order # {data[0].OrderNumber}</h6>
          <article className="card">
            <div className="card-body row">
              <div className="col">
                <strong>Tracking #</strong>
                <br />
                {data[0].TrackingNumber}
              </div>
              <div className="col">
                <strong>Shipping BY:</strong>
                <br />
                {data[0].Courier} |{"   "}
                <a
                  className="fa fa-external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data[0].CourierUrl}
                >
                  {"    Track Here "}
                </a>
              </div>
            </div>
          </article>
          <div className="track">
            <div className="step active">
              <span className="icon">
                <i className="fa fa-check"></i>
              </span>
              <span className="text">Order confirmed</span>
            </div>
            <div className="step active">
              <span className="icon">
                <i className="fa fa-truck"></i>
              </span>
              <span className="text"> Order Shipped </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OrderDetailModalBody;
