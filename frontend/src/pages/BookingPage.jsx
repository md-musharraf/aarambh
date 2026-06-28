import InfoBar from '../components/InfoBar/InfoBar';
import Booking from '../components/Booking/Booking';
import SEO from '../components/SEO/SEO';

const BookingPage = () => (
  <>
    <SEO
      title="Reserve Your Event Date – Aarambh Banquet Ranchi"
      description="Check date availability and request booking at Aarambh Banquet Ranchi. Let us help you plan a seamless and luxurious wedding, reception, or corporate function."
      keywords="wedding venue availability ranchi, aarambh banquet booking, event reservation ranchi"
      canonicalPath="/booking"
    />
    <InfoBar />
    <Booking />
  </>
);

export default BookingPage;

