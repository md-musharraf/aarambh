import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import "./Navbar.scss";

const navItems = [
  { label: "Home", to: "/#hero" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Packages", to: "/#packages" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (open) return;
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      // Hide navbar if scrolling down past 70px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}${hidden ? " navbar--hidden" : ""}`}>
        <nav className="navbar__inner">
          <Link
            to="/"
            className="navbar__logo"
          >
            <img
              src="https://ik.imagekit.io/ts2hm0adf/aarambh-banquet-ranchi/aarambh_logo.png"
              alt="Aarambh Banquet Logo"
              className="navbar__logo-img"
            />
          </Link>

          <ul className="navbar__links">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="navbar__link"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:08374287422"
                className="navbar__phone"
                aria-label="Call Aarambh Banquet"
              >
                <FaPhone /> <span>+91 83742 87422</span>
              </a>
            </li>
            <li>
              <Link
                to="/#booking"
                className="navbar__book-btn"
              >
                Book Now
              </Link>
            </li>
          </ul>

          <button
            id="hamburger-btn"
            className="navbar__hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`navbar__mobile${open ? " navbar__mobile--open" : ""}`}>
        {navItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            onClick={close}
            className="navbar__mobile-link"
          >
            {label}
          </Link>
        ))}
        <a
          href="tel:08374287422"
          onClick={close}
          className="navbar__mobile-phone"
        >
          <FaPhone /> Call: +91 83742 87422
        </a>
        <Link
          to="/#booking"
          onClick={close}
          className="navbar__mobile-book"
        >
          Book Now
        </Link>
      </div>
    </>
  );
};

export default Navbar;
