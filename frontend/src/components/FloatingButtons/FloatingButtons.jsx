import { motion } from "framer-motion";
import { FaWhatsapp, FaCalendarCheck, FaBed, FaPhone } from "react-icons/fa";
import "./FloatingButtons.scss";

const WA_URL =
  "https://wa.me/918374287422?text=Hello!%20I'd%20like%20to%20book%20Aarambh%20Banquet%20for%20my%20event.";

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 18,
};

const FloatingButtons = ({ onStayRoomClick }) => (
  <>
    {/* Desktop Floating Action Buttons */}
    <div className="float-group">
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="float-wa"
        title="Chat on WhatsApp"
        id="float-whatsapp"
        whileHover={{ y: -3, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={springTransition}
      >
        <FaWhatsapp />
      </motion.a>

      <motion.a
        href="tel:08374287422"
        className="float-phone"
        title="Call Us Now"
        id="float-call"
        whileHover={{ y: -3, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={springTransition}
      >
        <FaPhone />
      </motion.a>

      <motion.a
        href="#booking"
        className="float-book"
        id="float-book"
        whileHover={{ y: -5, scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={springTransition}
      >
        <FaCalendarCheck /> Book Now
      </motion.a>

      <motion.button
        type="button"
        className="float-stay"
        onClick={onStayRoomClick}
        aria-label="Stay room availability"
        whileHover={{ y: -5, scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={springTransition}
      >
        <FaBed /> <span className="float-stay__text">Stay Room</span>
      </motion.button>
    </div>

    {/* Mobile Sticky Bottom CTA Bar */}
    <div className="mobile-sticky-bar">
      <a
        href="tel:08374287422"
        className="mobile-sticky-bar__btn mobile-sticky-bar__btn--call"
      >
        <FaPhone /> Call Us Now
      </a>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-sticky-bar__btn mobile-sticky-bar__btn--wa"
      >
        <FaWhatsapp /> WhatsApp Book
      </a>
    </div>
  </>
);

export default FloatingButtons;
