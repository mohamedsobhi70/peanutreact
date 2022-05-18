function Winners() {
  return (
    <section className="winners mt-5">
      <div className="container">
        <div className="row">
          <h5 className="fw-600 fs-18 text-dark-color  mb-5">Winners</h5>
          <div className="col-sm-6 col-lg-3 my-5 ">
            <div className="winners-item p-3 bg-white rounded-8 shadow-main position-relative">
              <div className="winner-img-box d-flex justify-content-center position-absolute">
                <img
                  src="images/winner.png"
                  className="rounded-circle overflow-hidden border border-5"
                  alt=""
                />
              </div>
              <div className="product-img pt-5 text-center py-3">
                <img src="/images/13.jpg" className="w-100" alt=" phone" />
              </div>
              <div className="text-secondary-color fs-24 text-center fw-900">
                Congratulations to
              </div>
              <div className="winner-name text-center text-primary-color fw-600 text-capitalize">
                mohammed sobhi
              </div>
              <div className="winner-product text-center text-primary-color fw-600 text-capitalize">
                On winning an Apple bundle
              </div>
              <div className="winner-product text-center text-text-color mt-2 fw-500 fs-10">
                Ticket: 128235712
              </div>
              <div className="winner-product text-center text-text-color fw-500 fs-10">
                Draw date: 22 Jan 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Winners;
