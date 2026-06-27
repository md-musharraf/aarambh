import { useForm } from "react-hook-form";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal";
import "./Contact.scss";
import { toast } from "react-hot-toast";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = ({ name, phone, event, message }) => {
    const text =
      `🌿 *Aarambh Banquet Inquiry*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}` +
      (event ? `\n🎉 Event: ${event}` : "") +
      (message ? `\n💬 Message: ${message}` : "");
    window.open(`https://wa.me/918374287422?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Inquiry ready! Opening WhatsApp...");
    reset();
  };

  return (
    <section
      className="section section--light contact"
      id="contact"
    >
      <ScrollReveal
        animation="fade-up"
        className="section-header"
      >
        <div className="section-tag">Get In Touch</div>
        <h2>We'd Love to Hear From You</h2>
        <div className="divider" />
      </ScrollReveal>

      <div className="contact__grid">
        {/* Left col */}
        <ScrollReveal animation="slide-in-left">
          <div className="contact__info">
            <h2>Visit or Call Us</h2>
            <p className="contact__lead">
              We're here to help you plan your perfect event. Reach out via WhatsApp, call, or drop
              by to see the venue in person.
            </p>

            <div className="contact__cards">
              <a
                className="contact__card"
                href="https://wa.me/918374287422?text=Hello!%20I'd%20like%20to%20inquire%20about%20Aarambh%20Banquet."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact__card-icon contact__card-icon--green">
                  <FaWhatsapp />
                </div>
                <div className="contact__card-text">
                  <strong>Chat on WhatsApp</strong>
                  <span>+91 83742 87422 — Quick responses</span>
                </div>
              </a>

              <a
                className="contact__card"
                href="tel:08374287422"
              >
                <div className="contact__card-icon contact__card-icon--blue">
                  <FaPhone />
                </div>
                <div className="contact__card-text">
                  <strong>Call Us Directly</strong>
                  <span>+91 83742 87422</span>
                </div>
              </a>

              <a
                className="contact__card"
                href="https://maps.app.goo.gl/bajCE2wMVhMewhdJ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact__card-icon contact__card-icon--gold">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact__card-text">
                  <strong>Find Us on Map</strong>
                  <span>Ketari Bagan Rd, Ketari Bagan, Lower Chutia, Namkum, Ranchi, Jharkhand 834010</span>
                </div>
              </a>
            </div>

            <div className="contact__map">
              <iframe
                src="https://maps.google.com/maps?q=Aarambh%20Banquet,%20Ketari%20Bagan,%20Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aarambh Banquet location"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Right col — contact form */}
        <ScrollReveal
          as="form"
          animation="slide-in-right"
          delay="2"
          className="contact__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h3>Send a Message</h3>
          <p className="contact__sub">We'll get back to you within a few hours.</p>

          <div className="form-group">
            <label htmlFor="cName">Your Name *</label>
            <input
              id="cName"
              type="text"
              placeholder="Full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cPhone">Phone / WhatsApp *</label>
            <input
              id="cPhone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <span className="form-error">{errors.phone.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cEvent">Event Type</label>
            <select
              id="cEvent"
              {...register("event")}
            >
              <option value="">Select event type</option>
              {[
                "Wedding",
                "Reception",
                "Engagement",
                "Birthday Party",
                "Corporate Event",
                "Other",
              ].map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cMessage">Message</label>
            <textarea
              id="cMessage"
              rows={4}
              placeholder="Tell us about your event and requirements..."
              {...register("message")}
            />
          </div>

          <button
            type="submit"
            className="contact__send-btn"
          >
            <FaWhatsapp /> Send via WhatsApp
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
