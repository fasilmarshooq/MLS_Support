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
    <div class="container">
      <article class="card">
        <div class="card-body">
          <h6>Order # {data[0].OrderNumber}</h6>
          <article class="card">
            <div class="card-body row">
              <div class="col">
                <strong>Tracking #</strong>
                <br />
                {data[0].TrackingNumber}
              </div>
              <div class="col">
                <strong>Shipping BY:</strong>
                <br />
                {data[0].Courier} |{"   "}
                <a
                  class="fa fa-external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data[0].CourierUrl}
                >
                  {"   "}
                </a>
              </div>
            </div>
          </article>
          <div class="track">
            <div class="step active">
              <span class="icon">
                <i class="fa fa-check"></i>
              </span>
              <span class="text">Order confirmed</span>
            </div>
            <div class="step active">
              <span class="icon">
                <i class="fa fa-truck"></i>
              </span>
              <span class="text"> Order Shipped </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OrderDetailModalBody;
