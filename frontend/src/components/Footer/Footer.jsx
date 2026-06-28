import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__brand">
        <Link
          to="/"
          className="footer__logo"
        >
          <img
            src="https://ik.imagekit.io/ts2hm0adf/aarambh-banquet-ranchi/aarambh_logo.png"
            alt="Aarambh Banquet Logo"
            className="footer__logo-img"
          />
        </Link>
        <p>
          A premium event venue in Ranchi, Jharkhand — the perfect setting for weddings,
          receptions, engagements, and all your special celebrations.
        </p>
        <div className="footer__socials">
          <a
            href="https://wa.me/918374287422"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/aarambh_banquet_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1Av6cvZHyv/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="mailto:drvkmt@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer__col">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/#about">About Us</Link>
          </li>
          <li>
            <Link to="/#services">Services</Link>
          </li>
          <li>
            <Link to="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/#packages">Packages</Link>
          </li>
          <li>
            <Link to="/#booking">Book Now</Link>
          </li>
        </ul>
      </div>

      <div className="footer__col">
        <h4>Events</h4>
        <ul>
          <li>
            <Link to="/#services">Weddings</Link>
          </li>
          <li>
            <Link to="/#services">Receptions</Link>
          </li>
          <li>
            <Link to="/#services">Engagements</Link>
          </li>
          <li>
            <Link to="/#services">Birthday Parties</Link>
          </li>
          <li>
            <Link to="/#services">Corporate Events</Link>
          </li>
        </ul>
      </div>

      <div className="footer__col">
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="tel:08374287422">+91 83742 87422</a>
          </li>
          <li>
            <a
              href="https://wa.me/918374287422"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/bajCE2wMVhMewhdJ7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </li>
          <li>
            <span>Ketari Bagan Rd, Ketari Bagan, Lower Chutia, Namkum, Ranchi, Jharkhand 834010</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer__bottom">
      <span>© 2026 Aarambh Banquet, Ranchi. All rights reserved.</span>
      <span>
        Design <span className="footer__heart">&</span> Develop by{" "}
        <span className="footer__heart">Md Musharraf</span>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <h4>Contact :-</h4>
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                "https://wa.me/916299019431?text=Hello!%20I'd%20like%20to%20inquire%20about%20Aarambh%20Banquet.",
                "_blank",
              )
            }
          >
            <a
              style={{ color: "#ffff" }}
              href="tel:+916299019431"
            >
              +91 62990 19431
            </a>
          </span>
        </div>
      </span>
    </div>
  </footer>
);

export default Footer;
