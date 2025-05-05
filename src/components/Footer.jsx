const Footer = () => {
    return (
    <div>
        <section className="row mt-5 footer-background py-5">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-3 text-center text-info">About Us</h5>
                <p className="text-justify">Eram Wear offers premium, stylish clothing crafted from high-quality fabrics to ensure comfort and durability. Our collection features trendy, versatile apparel designed to enhance your style effortlessly.</p>
                <p className="text-justify">Whether you're dressing up for an event or keeping it casual, our clothing is tailored to suit every occasion with sophistication and ease.</p>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-3 text-center text-info">Reach Us Out</h5>
                <input className="form-control mb-3" type="email" placeholder="Enter your email" />
                <textarea className="form-control mb-3" rows="7" placeholder="Leave a comment"></textarea>
                <input type="submit" value="Send Message" className="btn btn-primary w-100" />
            </div>
            <div className="col-md-4 text-light">
                <h4 className="text-center text-info mb-4">Connect With Us</h4>
                <div className="d-flex justify-content-center mb-3">
                    <a href="https://facebook.com" className="mx-2">
                        <img src="images/facebook.jfif" alt="Facebook" className="social-pictures" />
                    </a>
                    <a href="https://instagram.com" className="mx-2">
                        <img src="images/instagram.jfif" alt="Instagram" className="social-pictures" />
                    </a>
                </div>
                <p className="text-justify text-dark">Eram Wear is a premium online store offering stylish, high-quality clothing for all occasions. Whether you're looking for classic staples or the latest fashion trends, we have something for everyone.</p>
            </div>
        </section>
        <footer className="text-white text-center p-4 mt-5 bottom-footer" style={{ backgroundColor: '#1a1a1a' }}>
            <h5>Developed by Prince. &copy; 2025. All rights reserved.</h5>
        </footer>
    </div>
    );
}

export default Footer;
