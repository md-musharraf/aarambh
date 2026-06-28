import Hero from '../components/Hero/Hero';
import InfoBar from '../components/InfoBar/InfoBar';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Booking from '../components/Booking/Booking';
import Packages from '../components/Packages/Packages';
import Testimonials from '../components/Testimonials/Testimonials';
import ClosingCTA from '../components/ClosingCTA/ClosingCTA';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EventVenue",
      "@id": "https://aarambhbanquet.com/#venue",
      "name": "Aarambh Banquet",
      "description": "Aarambh Banquet is a premium event venue in Ranchi, Jharkhand for weddings, receptions, engagements, birthday parties & corporate events.",
      "image": "https://ik.imagekit.io/ts2hm0adf/tr:w-1200/aarambh-banquet-ranchi/THE9-20_.jpg?updatedAt=1782469690532",
      "url": "https://aarambhbanquet.com",
      "telephone": "+918374287422",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ketari Bagan Rd, Namkum",
        "addressLocality": "Ranchi",
        "addressRegion": "Jharkhand",
        "postalCode": "834010",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.3444,
        "longitude": 85.3789
      },
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://aarambhbanquet.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the guest capacity of Aarambh Banquet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aarambh Banquet can comfortably host intimate gatherings to grand celebrations of 500+ guests, utilizing our spacious air-conditioned indoor hall and lush open-air garden lawn."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have separate kitchens for Veg and Non-Veg food?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we prioritize traditional and cultural preferences. We have strictly segregated, completely independent kitchens for preparing vegetarian and non-vegetarian cuisines."
          }
        },
        {
          "@type": "Question",
          "name": "Is there sufficient parking space available at the venue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide ample secure private parking space inside the venue premises for over 100+ vehicles, managed by professional security guards during your event."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide custom decoration and themes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We offer custom elegant stage setups, custom lighting, premium floral decors, and specific themes customized to your taste. You can consult our in-house decor team to customize your design."
          }
        },
        {
          "@type": "Question",
          "name": "What is the booking and cancellation policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A booking deposit of 30% is required to reserve your date. The remaining balance is payable prior to the event. Cancellation policies depend on the notice period; please contact us for custom terms."
          }
        }
      ]
    }
  ]
};

/**
 * HomePage assembles all the main-page sections in order.
 * Each section is a self-contained component with its own SCSS.
 */
const HomePage = () => (
  <>
    <SEO
      title="Aarambh Banquet – Elegant Wedding & Event Venue in Ranchi"
      description="Aarambh Banquet is a premium event venue in Ranchi, Jharkhand. Host grand weddings, receptions, engagements, birthday parties & corporate events with premium catering and decor."
      keywords="wedding venue ranchi, banquet hall ranchi, best marriage hall in ranchi, event venue ranchi, aarambh banquet ranchi, ketari bagan, namkum"
      canonicalPath="/"
      schema={homeSchema}
    />
    <InfoBar />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Booking />
    <Packages />
    <Testimonials />
    <ClosingCTA />
    <Contact />
  </>
);

export default HomePage;

