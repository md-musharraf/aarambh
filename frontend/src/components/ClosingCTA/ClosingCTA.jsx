import ScrollReveal from "../ScrollReveal";
import { FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import "./ClosingCTA.scss";

const WA_URL =
  "https://wa.me/918374287422?text=Hello!%20I'd%20like%20to%20get%20a%20free%20quote%20for%20my%20upcoming%20event%20at%20Aarambh%20Banquet.";

const ClosingCTA = () => (
  <section className="closing-cta">
    <div className="closing-cta__bg" aria-hidden="true" />
    <div className="closing-cta__content">
      <ScrollReveal animation="fade-up">
        <h2>Make Your Dream Event a Reality</h2>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={1}>
        <p className="closing-cta__text">
          Weekend dates for the upcoming wedding and festive season are filling up rapidly. 
          Secure your slot today and let us host a celebration your guests will cherish forever.
        </p>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={2} className="closing-cta__btns">
        <a href="#booking" className="btn-primary">
          <FaCalendarCheck /> Reserve Your Date
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ borderColor: "#ffffff", color: "#ffffff" }}
        >
          <FaWhatsapp /> Get Free Quote on WhatsApp
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default ClosingCTA;
