import { useEffect, useRef } from "react";
import { FaLeaf, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import "./Hero.scss";

const WA_URL =
  "https://wa.me/918374287422?text=Hello!%20I'd%20like%20to%20book%20Aarambh%20Banquet%20for%20my%20event.";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Phase 1: Background image/video fade & blur release
      tl.fromTo(
        [".hero__bg", ".hero__video-bg"],
        { filter: "blur(12px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 2.2 }
      );

      // Phase 2: Stagger reveal of content elements (y-offset slide and opacity)
      tl.fromTo(
        [".hero__badge", ".hero__heading", ".hero__sub", ".hero__btns", ".hero__scroll"],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 },
        "-=1.6" // Overlap with background animation
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      id="hero"
      aria-label="Hero banner"
    >
      {/* Autoplay Infinite Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://ik.imagekit.io/ts2hm0adf/tr:w-1200/aarambh-banquet-ranchi/THE9-20_.jpg?updatedAt=1782469690532"
        className="hero__video-bg"
        src="https://ik.imagekit.io/ts2hm0adf/aarambh-banquet-ranchi/hero.mp4?updatedAt=1782386160073"
      />

      {/* Ken Burns Animated Background Layer fallback */}
      <div className="hero__bg" aria-hidden="true" style={{ display: "none" }} />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge" style={{ opacity: 0 }}>
          <FaLeaf />
          Premium Luxury Venue · Ranchi
        </div>

        <h1 className="hero__heading" style={{ opacity: 0 }}>
          Begin Your Forever
          <br />
          Where <em>Luxury Meets Celebration</em>
        </h1>

        <p className="hero__sub" style={{ opacity: 0 }}>
          Ranchi's premier banquet hall and open garden venue, offering custom decor,
          <br />
          in-house catering, and elegant spaces for up to 500+ guests.
        </p>

        <div className="hero__btns" style={{ opacity: 0 }}>
          <a
            href="#booking"
            className="btn-primary"
          >
            Check Availability
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ borderColor: "#ffffff", color: "#ffffff" }}
          >
            <FaWhatsapp /> Book via WhatsApp
          </a>
        </div>
      </div>

      <div
        className="hero__scroll"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <div className="hero__scroll-dot" />
        Scroll
      </div>
    </section>
  );
};

export default Hero;
