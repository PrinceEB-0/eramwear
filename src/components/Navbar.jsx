import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3 px-4 border-bottom sticky-top">
      <div className="container-fluid">

        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fs-4 fw-bold text-dark">
          Eram<span className="text-danger">Wear</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
          aria-controls="navbarcontents"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-semibold text-dark">
                Casual Wear
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formalwear" className="nav-link fw-semibold text-dark">
                Formal Wear
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link fw-semibold text-dark">
                Accessories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link fw-semibold text-dark">
                New Arrivals
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-2">
              <Link to="/aboutus" className="nav-link text-dark fw-semibold">
                About Us
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/signin" className="btn btn-outline-dark px-3">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-danger px-3">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
