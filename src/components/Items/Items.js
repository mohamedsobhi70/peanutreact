import React from "react";
function Items() {
  return (
    <section className=" mt-5">
      <div className="container">
        <div className="row">
          <div className="mb-3 d-flex align-items-center justify-content-between">
            <h5 className="fw-600 text-dark-color mb-0 fs-18">
              Reduced price item
            </h5>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="reduced-price-item p-3 bg-white rounded-8 shadow-main">
              <div className="d-flex align-items-center justify-content-end">
                <div className="favorit">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.73 19.32C10.6 19.32 10.46 19.27 10.36 19.17L1.75 10.85C0.61 9.63 0 8.07 0 6.44C0 2.89 2.89 0 6.44 0C8.05 0 9.55 0.58 10.73 1.65C11.92 0.58 13.42 0 15.03 0C18.58 0 21.47 2.89 21.47 6.44C21.47 8.07 20.86 9.63 19.74 10.83L11.11 19.17C11 19.27 10.87 19.32 10.73 19.32ZM6.44 1.07C3.48 1.07 1.07 3.48 1.07 6.44C1.07 7.8 1.58 9.1 2.51 10.1L10.73 18.04L18.97 10.08C19.88 9.1 20.39 7.81 20.39 6.44C20.39 3.48 17.98 1.07 15.02 1.07C13.53 1.07 12.15 1.67 11.12 2.76C10.92 2.98 10.54 2.98 10.34 2.76C9.31 1.67 7.93 1.07 6.44 1.07Z"
                      fill="#3269AC"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-img text-center py-3">
                <img src="/images/14.jpg" className="img-fluid" alt=" phone" />
              </div>
              <div className="product-name">
                <h6 className="fs-14 fw-600 text-dark-color">
                  iPhone 13 Pro - Sierra Blue - 265GB With FaceTime UAE specs...
                </h6>
              </div>
              <span className="fs-12 text-error-color fw-600">now</span>
              <div className="price-box d-flex align-items-center justify-content-between text-primary-color">
                <div className="price  d-flex align-items-center">
                  <span className="new-price fw-600 me-2">AED 3,599</span>
                  <span className="old-price fs-12 text-decoration-line-through fw-600">
                    AED 4,199
                  </span>
                </div>
                <div className="price-info d-flex align-items-center">
                  <span className="">
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.29443 13.5L6.29443 0"
                        stroke="#FF4F4F"
                        strokeWidth="2"
                      />
                      <path
                        d="M11.7944 8.5L6.29443 14L0.794434 8.5"
                        stroke="#FF4F4F"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <span
                    className="rounded-circle bg-acent ms-2 fs-12 fw-600 d-inline-flex justify-content-center align-items-center"
                    role="button"
                    style={{ width: "20px", height: "20px" }}
                  >
                    ?
                  </span>
                </div>
              </div>
              <div className="add-to-cart ">
                <button className="btn w-100 fs-18 mt-3 rounded-pill bg-secondary-color text-white px-4 py-2">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;
