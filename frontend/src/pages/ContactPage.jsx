import InfoBar from '../components/InfoBar/InfoBar';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Aarambh Banquet",
  "description": "Find Aarambh Banquet in Ketari Bagan, Namkum, Ranchi. Get phone number, WhatsApp chat details, and Google Map directions.",
  "url": "https://aarambhbanquet.com/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Aarambh Banquet",
    "telephone": "+918374287422",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ketari Bagan Rd, Namkum",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834010",
      "addressCountry": "IN"
    }
  }
};

const ContactPage = () => (
  <>
    <SEO
      title="Contact & Book Aarambh Banquet – Ranchi, Jharkhand"
      description="Get in touch with Aarambh Banquet in Ketari Bagan, Namkum, Ranchi. Call +91 83742 87422, chat via WhatsApp, or follow Google Map directions to visit us."
      keywords="book banquet hall ranchi, aarambh banquet contact number, wedding hall ranchi direction, namkum marriage hall contact"
      canonicalPath="/contact"
      schema={contactSchema}
    />
    <InfoBar />
    <Contact />
  </>
);

export default ContactPage;

