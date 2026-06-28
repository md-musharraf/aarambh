import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/Routes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StayRoomPopup from "./components/StayRoomPopup/StayRoomPopup";
import { Toaster } from "react-hot-toast";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ADMIN_ROUTES = ["/admin", "/admin-login"];

const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        // Dynamic smooth anchor glide using Lenis scrollTo
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: -70 });
        } else {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      return;
    }

    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => {
  const location = useLocation();
  const isAdminRoute = ADMIN_ROUTES.some((r) => location.pathname.startsWith(r));
  const [showStayPopup, setShowStayPopup] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);



  useEffect(() => {
    if (isAdminRoute) return undefined;

    // Skip Lenis smooth scroll on mobile/touch devices to prevent ScrollTrigger/IntersectionObserver scroll freeze
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
    if (isTouchDevice) {
      window.lenis = null;
      return undefined;
    }

    // Initialize luxury Lenis smooth scroll for desktop
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    // Synchronize GSAP ScrollTrigger ticks with Lenis scroll
    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress * 100);
    });

    const rafTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = null;
      gsap.ticker.remove(rafTicker);
    };
  }, [isAdminRoute]);

  return (
    <div className="app">
      {!isAdminRoute && (
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      )}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && (
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4500,
            style: {
              background: "#1c1c1e",
              color: "#faf7f2",
              border: "1px solid rgba(223, 177, 91, 0.35)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.9rem",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
            },
            success: {
              iconTheme: {
                primary: "#dfb15b",
                secondary: "#1c1c1e",
              },
            },
          }}
        />
      )}
      <ScrollToAnchor />

      <main style={isAdminRoute ? {} : { paddingTop: "70px" }}>
        <AppRoutes />
      </main>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingButtons onStayRoomClick={() => setShowStayPopup(true)} />}
      {!isAdminRoute && (
        <StayRoomPopup
          isOpen={showStayPopup}
          onClose={() => setShowStayPopup(false)}
        />
      )}
    </div>
  );
};

export default App;
