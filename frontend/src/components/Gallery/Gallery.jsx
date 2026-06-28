import { useEffect, useState } from "react";
import axios from "../../axios/config";
import ScrollReveal from "../ScrollReveal";
import { FaPlayCircle, FaImages } from "react-icons/fa";
import "./Gallery.scss";

const PAGE_SIZE = 9;
const CATEGORIES = ["All", "Wedding", "Reception", "Birthday Party", "Corporate Event"];

const getOptimizedUrl = (url) => {
  if (!url) return "";
  if (url.includes("ik.imagekit.io") && !url.includes("/tr:")) {
    const match = url.match(/(ik\.imagekit\.io\/[^/]+)/);
    if (match) {
      return url.replace(match[0], `${match[0]}/tr:w-800`);
    }
  }
  return url;
};

const getLightboxOptimizedUrl = (url) => {
  if (!url) return "";
  if (url.includes("ik.imagekit.io") && !url.includes("/tr:")) {
    const match = url.match(/(ik\.imagekit\.io\/[^/]+)/);
    if (match) {
      return url.replace(match[0], `${match[0]}/tr:w-1600`);
    }
  }
  return url;
};

const Gallery = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setShowTour(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox || showTour ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, showTour]);

  const load = async (nextSkip = 0, cat = activeCategory) => {
    setLoading(true);
    try {
      const categoryParam = cat === "All" ? "" : cat;
      const res = await axios.get(
        `/api/images?limit=${PAGE_SIZE}&skip=${nextSkip}&category=${encodeURIComponent(categoryParam)}`
      );
      if (nextSkip === 0) setMediaItems(res.data.images);
      else setMediaItems((prev) => [...prev, ...res.data.images]);
      setTotal(res.data.total || 0);
      setSkip(nextSkip + PAGE_SIZE);
    } catch (err) {
      console.error("Failed to load images", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load(0, activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSkip(0);
  };

  return (
    <section
      className="section section--light gallery"
      id="gallery"
    >
      <ScrollReveal
        animation="fade-up"
        className="section-header"
      >
        <div className="section-tag">Our Gallery</div>
        <h2>Moments Captured at Aarambh Banquet</h2>
        <div className="divider" />
        <p style={{ marginBottom: "20px" }}>
          A glimpse of the beautiful celebrations and memories created at our venue.
        </p>

        {/* Virtual Venue Tour CTA */}
        <div className="gallery__tour-cta">
          <button
            onClick={() => setShowTour(true)}
            className="btn-outline"
            style={{ padding: "10px 24px", fontSize: "0.9rem" }}
          >
            <FaPlayCircle /> Watch Virtual Venue Tour
          </button>
        </div>
      </ScrollReveal>

      {/* Category Tab Bar */}
      <div className="gallery__tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`gallery__tab${activeCategory === cat ? " gallery__tab--active" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat === "All" ? <FaImages style={{ marginRight: "6px" }} /> : null}
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {mediaItems.map((item, idx) => (
          <ScrollReveal
            key={item._id}
            animation="scale-in"
            delay={(idx % 3) + 1}
            className="gallery__item"
            role="button"
            tabIndex={0}
            aria-label={`View ${item.event}`}
            onClick={() => setLightbox({ src: item.image, alt: item.event, type: item.mediaType })}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              setLightbox({ src: item.image, alt: item.event, type: item.mediaType })
            }
          >
            {item.mediaType === "video" ? (
              <video
                className="gallery__media"
                src={item.image}
                muted
                loop
                playsInline
                autoPlay
              />
            ) : (
              <img
                className="gallery__media"
                src={getOptimizedUrl(item.image)}
                alt={item.event}
                loading="lazy"
              />
            )}
            <div className="gallery__overlay">
              <span>{item.event}</span>
            </div>
          </ScrollReveal>
        ))}
        {loading &&
          Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="gallery__skeleton"
              style={{
                height: i % 3 === 0 ? "300px" : i % 3 === 1 ? "220px" : "260px",
              }}
            />
          ))}
      </div>

      {skip < total && !loading && (
        <div className="gallery__more">
          <button onClick={() => load(skip, activeCategory)}>View More</button>
        </div>
      )}

      {/* Media Lightbox */}
      {lightbox && (
        <div
          className="gallery__lightbox"
          id="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <button
            className="gallery__lightbox-close"
            aria-label="Close lightbox"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          {lightbox.type === "video" ? (
            <video
              className="gallery__lightbox-media"
              src={lightbox.src}
              muted
              loop
              playsInline
              controls
              autoPlay
            />
          ) : (
            <img
              className="gallery__lightbox-media"
              src={getLightboxOptimizedUrl(lightbox.src)}
              alt={lightbox.alt}
            />
          )}
        </div>
      )}

      {/* Virtual Tour Lightbox */}
      {showTour && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Virtual tour video player"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowTour(false);
          }}
        >
          <button
            className="gallery__lightbox-close"
            aria-label="Close virtual tour"
            onClick={() => setShowTour(false)}
          >
            ×
          </button>
          <video
            className="gallery__lightbox-media"
            src="https://ik.imagekit.io/ts2hm0adf/aarambh-banquet-ranchi/hero.mp4?updatedAt=1782386160073"
            controls
            autoPlay
            playsInline
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
