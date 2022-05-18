import { useState, useEffect } from "react";
import axios from "axios";

function Commingsoon() {
  const [Products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [cartNum, setcartNum] = useState(cartItems === [] ? 0 : 3);
  useEffect(() => {
    axios.get("./js/products.json").then((res) => {
      setProducts(res.data.newProducts);
    });
  }, []);
  const handleAddToCart = (id) => {
    let selected = Products.filter((p) => p.id == id);

    if (cartItems.findIndex((el) => el.id == id) === -1 || cartItems === []) {
      cartItems.push(...selected);
    }
    cartItems[cartItems.findIndex((el) => el.id === id)].qty++;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  return (
    <section className="comming-soon mt-5">
      <div className="container">
        <div className="row items-section">
          <h5 className="mb-3 fw-600 fs-18 text-dark-color">Closing soon</h5>
          {Products.map((product) => (
            <div key={product.id} className="col-sm-6 col-lg-3 mb-4">
              <div className="comming-soon-item p-3 bg-white rounded-8 shadow-main">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="sold position-relative text-center">
                    <div>
                      <svg
                        className="position-absolute"
                        width="89"
                        height="54"
                        viewBox="0 0 89 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M88.4608 0.82843C81.9103 -0.145001 75.0651 1.34308 69.4126 5.29268V5.27728C60.1243 11.2846 50.397 9.8444 42.3949 5.09243C32.0746 -1.96236 17.888 -0.914927 8.73059 8.24243C-1.61284 18.5859 -1.61283 35.3602 8.73059 45.7037C17.5029 54.4605 30.8808 55.7929 41.0471 49.7086L41.0625 49.724C49.8039 43.8321 61.4567 43.732 70.3599 49.4159L70.3753 49.4005C75.8272 52.8655 82.2749 54.1399 88.4608 53.2213V0.82843Z"
                          fill="#FDE8CD"
                        />
                      </svg>
                      <svg
                        className="position-absolute"
                        width="112"
                        height="54"
                        viewBox="0 0 112 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M70.1323 47.5222C61.0283 42.2527 49.5152 42.4684 40.6647 48.1893L40.2768 48.4214C30.6863 54.1612 18.065 52.9021 9.79034 44.642C0.0336208 34.8843 0.0339337 19.0604 9.79127 9.30307C18.4285 0.665821 31.8122 -0.324785 41.5484 6.33073L41.5879 6.35772L41.629 6.38214C49.9864 11.3451 60.3419 12.9302 70.2272 6.53678L70.0001 6.18567C70.0095 6.18186 70.0189 6.17793 70.0283 6.17389L70.2717 6.52223C80.0138 -0.284874 93.5129 0.661195 102.209 9.35699C111.966 19.1146 111.966 34.9393 102.209 44.6969C93.7823 53.1233 80.8276 54.266 71.1799 48.1345L70.165 47.4895L70.1323 47.5222Z"
                          stroke="#F7AB4B"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                    <div
                      className="d-flex  justify-content-around align-items-center position-relative"
                      style={{ width: "112px", height: "54px" }}
                    >
                      <div className="">
                        <h6 className="fw-600 text-dark-color mb-0 fs-14">
                          800
                        </h6>
                        <p className="mb-0 fw-500 text-dark-color fs-10">
                          sold
                        </p>
                      </div>
                      <div className="">
                        <p className="mb-0 fw-500 text-dark-color fs-10">
                          out of
                        </p>
                        <h6 className="fw-600 text-dark-color mb-0 fs-14">
                          950
                        </h6>
                      </div>
                    </div>
                  </div>
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
                  <img
                    src={product.img}
                    className="w-100"
                    alt={product.productName}
                  />
                </div>
                <div className="product-name text-center">
                  <h6>{product.productName}</h6>
                </div>
                <div className="add-to-cart d-flex justify-content-around align-items-center">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="btn fs-18 rounded-pill bg-secondary-color text-white px-4 py-2"
                  >
                    Add To Cart
                  </button>
                  <p className="text-primary-color fs-18 fw-normal mb-0">
                    AED {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Commingsoon;
