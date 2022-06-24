import "../../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="internship">
        <div className="left">
          <h1>Are you interested in doing internship with us?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            architecto.
          </p>
        </div>

        <div className="right">
          <button>Contact Us</button>
        </div>
      </section>

      <section className="footer">
        <div className="head">
          <div className="logo">Llegal</div>
          <div className="social">
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>
        </div>
        <div className="border"></div>
        <div className="content">
          <div className="info">
            <h5>Company Info</h5>
            <p>About Us</p>
            <p>Career</p>
            <p>Blogs</p>
            <p>Contact Us</p>
          </div>
          <div className="info">
            <h5>Legal</h5>
            <p>About Us</p>
            <p>Career</p>
            <p>Blogs</p>
            <p>Contact Us</p>
          </div>
          <div className="info">
            <h5>Features</h5>
            <p>Business Marketing</p>
            <p>User Analysis</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className="subscription">
            <h5>Subscribe Us</h5>
            <div className="form">
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Made with &lt;3 by MD Zillur Rahman || All Right Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
