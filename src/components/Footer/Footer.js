import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="shadow-main py-3 bg-white border-20 px-5 d-flex align-items-md-center justify-content-center justify-content-md-between">
          <ul className="list-unstyled d-none d-md-flex mb-0">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Our partners
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Terms &amp; conditions
              </Link>
            </li>
          </ul>
          <div className="social-media d-flex">
            <div className="social-item rounded-circle bg-tertiary ms-2 d-inline-flex justify-content-center align-items-center">
              <Link
                to="/"
                className="text-decoration-none text-white"
                aria-label="insta"
              >
                <i className="fab fa-instagram fa-sm"></i>
              </Link>
            </div>
            <div className="social-item rounded-circle bg-tertiary ms-2 d-inline-flex justify-content-center align-items-center">
              <Link
                to="/"
                className="text-decoration-none text-white"
                aria-label="facebook"
              >
                <i className="fab fa-facebook-f fa-sm"></i>
              </Link>
            </div>
            <div className="social-item rounded-circle bg-tertiary ms-2 d-inline-flex justify-content-center align-items-center">
              <Link
                to="/"
                className="text-decoration-none text-white"
                aria-label="google"
              >
                <i className="fab fa-google fa-sm"></i>
              </Link>
            </div>
            <div className="social-item rounded-circle bg-tertiary ms-2 d-inline-flex justify-content-center align-items-center">
              <Link
                to="/"
                className="text-decoration-none text-white"
                aria-label="whatsapp"
              >
                <i className="fab fa-whatsapp fa-sm"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center small my-1">
          <div className="small">&copy;Allright reserved 2022</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
