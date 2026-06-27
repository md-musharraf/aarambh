import { FaAward, FaPaintBrush, FaUtensils, FaParking, FaBolt, FaWind } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal";
import "./About.scss";

const badges = [
  {
    icon: <FaAward />,
    title: "Premium Service",
    desc: "Exemplary management and hospitality team.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Custom Decor",
    desc: "Bespoke themed styling & floral designs.",
  },
  {
    icon: <FaUtensils />,
    title: "Veg & Non-Veg",
    desc: "Dedicated separate kitchens for prep.",
  },
  {
    icon: <FaParking />,
    title: "Ample Parking",
    desc: "Secure private parking for guests.",
  },
  {
    icon: <FaBolt />,
    title: "100% Backup",
    desc: "Full power backup for smooth execution.",
  },
  {
    icon: <FaWind />,
    title: "AC Banquet",
    desc: "Fully air-conditioned indoor facilities.",
  },
];

const About = () => {
  return (
    <section
      className="section section--light about"
      id="about"
    >
      <div className="about__grid">
        <ScrollReveal
          animation="slide-in-left"
          className="about__img-wrap"
        >
          <div className="about__img-inner">
            <img
              src="https://ik.imagekit.io/ts2hm0adf/tr:w-1200/aarambh-banquet-ranchi/THE9-20_.jpg?updatedAt=1782469690532"
              alt="Aarambh Banquet Venue"
            />
          </div>
          <div className="about__badge">
            <div className="about__badge-num">5★</div>
            <div className="about__badge-lbl">Rated Venue</div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="slide-in-right"
          className="about__text"
        >
          <div className="section-tag">Discover Aarambh Banquet</div>
          <h2>Ranchi's Elegant Banquet Venue</h2>
          <p className="about__lead">
            Located in the heart of Ranchi, Aarambh Banquet offers a refined setting that
            turns every occasion into a memorable celebration. Our beautifully designed venue
            creates the perfect backdrop for your special moments.
          </p>

          <div className="about__badges">
            {badges.map(({ icon, title, desc }, idx) => (
              <ScrollReveal
                key={title}
                animation="fade-up"
                delay={idx + 1}
                className="about__badge-card"
              >
                <div className="about__badge-icon">{icon}</div>
                <div className="about__badge-info">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <a
            href="#booking"
            className="btn-primary"
            style={{ marginTop: "24px" }}
          >
            Reserve Your Date
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
