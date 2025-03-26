const Footer = () => {
    return (
    <div>
        <section className="row mt-4 footer-background">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Eram Wear offers premium, stylish clothing crafted from high-quality fabrics to ensure comfort and durability. Our collection features trendy, versatile apparel designed to enhance your style effortlessly.</p>
                <p>Whether you're dressing up for an event or keeping it casual, our clothing is tailored to suit every occasion with sophistication and ease.</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                    <img src="images/facebook.jfif" alt="Facebook" className="social-pictures"/>
                </a>
                <a href="https://instagram.com">
                    <img src="images/instagram.jfif" alt="Instagram" className="social-pictures"/>
                </a>
                <p className="text-dark">Eram Wear is a premium online store offering stylish, high-quality clothing for all occasions. Whether you're looking for classic staples or the latest fashion trends, we have something for everyone.</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bottom-footer">
            <h5>Developed by Prince. &copy; 2025. All rights reserved.</h5>
        </footer>
    </div>
    );
}

export default Footer;
