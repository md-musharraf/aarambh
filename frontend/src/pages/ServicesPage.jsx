import InfoBar from '../components/InfoBar/InfoBar';
import Services from '../components/Services/Services';
import SEO from '../components/SEO/SEO';

const ServicesPage = () => (
  <>
    <SEO
      title="Services & Facilities – Aarambh Banquet Ranchi"
      description="Explore our premium services including custom themed decorations, separate catering kitchens (veg & non-veg), air-conditioned indoor banquet halls, and complete power backup in Ranchi."
      keywords="marriage hall services ranchi, wedding decoration ranchi, catering services ranchi, ac wedding venue ranchi"
      canonicalPath="/services"
    />
    <InfoBar />
    <Services />
  </>
);

export default ServicesPage;

