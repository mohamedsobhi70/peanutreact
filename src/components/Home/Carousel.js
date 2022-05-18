function Carousel() {
  return (
    <div
      id="mainCarousel"
      className="carousel slide border-20 overflow-hidden"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" role="tablist">
        <div className="carousel-item active" role="tab">
          <img src="/images/slider.png" className="w-100" alt="First slide" />
        </div>
        <div className="carousel-item" role="tab">
          <img src="/images/slider.png" className="w-100" alt="Second slide" />
        </div>
        <div className="carousel-item" role="tab">
          <img src="/images/slider.png" className="w-100" alt="Third slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev d-inline-flex justify-content-center justify-content-center"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-inline-flex justify-content-center justify-content-center"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
