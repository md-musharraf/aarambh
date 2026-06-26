import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaCalendarCheck, FaInstagram } from "react-icons/fa";
import "./InfoBar.scss";

const items = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Ketari Bagan Rd, Ketari Bagan, Lower Chutia, Namkum, Ranchi, Jharkhand 834010",
    href: "https://maps.app.goo.gl/bajCE2wMVhMewhdJ7",
    external: true,
  },
  {
    icon: <FaPhone />,
    label: "+91 83742 87422",
    href: "tel:08374287422",
    external: false,
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp Us",
    href: "https://wa.me/918374287422",
    external: true,
  },
  {
    icon: <FaInstagram />,
    label: "@aarambh_banquet_official",
    href: "https://www.instagram.com/aarambh_banquet_official",
    external: true,
  },
  {
    icon: <FaCalendarCheck />,
    label: "Weddings · Events · Parties",
    href: null,
    external: false,
  },
];

const InfoBar = () => (
  <div className="info-bar">
    {items.map(({ icon, label, href, external }) =>
      href ? (
        <a
          key={label}
          className="info-bar__item"
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {icon}
          <span className="info-bar__text">{label}</span>
        </a>
      ) : (
        <span
          key={label}
          className="info-bar__item"
        >
          {icon}
          <span className="info-bar__text">{label}</span>
        </span>
      ),
    )}
  </div>
);

export default InfoBar;
