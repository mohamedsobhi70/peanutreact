function Vote() {
  return (
    <section className="vote mt-5">
      <div className="container">
        <div className="row">
          <h5 className="mb-3 text-dark-color fs-18 fw-600">
            Vote for what you want
          </h5>
          <div className="voting border-20 overflow-hidden d-flex flex-wrap p-0">
            <div className="sec1 flex-grow-1 bg-primary-color d-flex justify-content-center align-items-center py-5">
              <img src="images/watch.png" alt="sec1" />
              <div className="ms-4">
                <h6 className="text-white mb-3">Cash AED 250,000</h6>
                <button className="btn rounded-pill border-1 text-white border-white py-2 px-4">
                  vote
                </button>
              </div>
            </div>
            <div className="sec2 flex-grow-1 bg-secondary-color d-flex justify-content-center align-items-center py-5">
              <img src="images/money.png" alt="sec1" />
              <div className="ms-4">
                <h6 className="text-white mb-3">Cash AED 250,000</h6>
                <button className="btn rounded-pill border-1 text-white border-white py-2 px-4">
                  vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vote;
