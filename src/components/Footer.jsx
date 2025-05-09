const Footer = () => {
  return (
    <footer className="footer-modern text-light">
      <div className="container py-3">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 mb-3">
            <h5 className="text-info mb-2">About Us 🌟</h5>
            <p>
              Eram Wear offers premium, stylish clothing crafted from high-quality fabrics to ensure comfort and durability.
            </p>
            <p>
              Our collection features trendy, versatile apparel designed to enhance your style effortlessly. 👗
            </p>
          </div>

          {/* Contact Form */}
          <div className="col-md-4 mb-3">
            <h5 className="text-info mb-2">Reach Us Out 📬</h5>
            <input className="form-control mb-2" type="email" placeholder="Enter your email" />
            <textarea className="form-control mb-2" rows="4" placeholder="Leave a comment"></textarea>
            <input type="submit" value="Send Message ✉️" className="btn btn-primary w-100" />
          </div>

          {/* Social & Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="text-info mb-2 text-center">Connect With Us 🌐</h5>
            <div className="d-flex justify-content-center mb-2 footer-socials">
              <a href="https://facebook.com" className="mx-2">
                <img src="images/facebook.jfif" alt="Facebook" />
              </a>
              <a href="https://instagram.com" className="mx-2">
                <img src="images/instagram.jfif" alt="Instagram" />
              </a>
            </div>
            <p>
              Eram Wear is a premium online store offering stylish, high-quality clothing for all occasions. 👚
            </p>
          </div>
        </div>
        <hr className="text-secondary" />
        <div className="text-center mt-2 bottom-footer">
          <h6 className="text-muted">Developed by Prince. &copy; {new Date().getFullYear()} All rights reserved. 🌟</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
