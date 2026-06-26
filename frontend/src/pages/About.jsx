import { FaBell, FaLayerGroup, FaStar } from "react-icons/fa";
import { MdOutlineGroups3 } from "react-icons/md";
import { GiDustCloud } from "react-icons/gi";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img
          src="https://ik.imagekit.io/ts2hm0adf/aarambh-banquet-ranchi/THE9-20_.jpg?tr=w-1200"
          alt="about image"
        />

        <div className="about-box">
          <span className="star-about">
            5<FaStar />
          </span>
          <span className="rated-about">RATED VENUE</span>
        </div>
      </div>

      <div className="about-text-container">
        <p className="about-highlight">DISCOVER AARAMBH BANQUET</p>
        <h1 className="about-heading">Ranchi's Elegant Banquet Venue</h1>
        <p className="about-text">
          Located in the heart of Ranchi, Aarambh Banquet offers a refined setting that
          turns every occasion into a memorable celebration. Our beautifully designed venue
          creates the perfect backdrop for your special moments.
        </p>
        <ul className="about-features">
          <li className="about-feature">
            <span>
              <FaBell />
            </span>
            <p>Lush open garden with beautifully manicured landscapes and natural ambiance</p>
          </li>

          <li className="about-feature">
            <span>
              <FaStar />
            </span>
            <p>Thoughtfully designed event spaces with elegant decor setups</p>
          </li>

          <li className="about-feature">
            <span>
              <MdOutlineGroups3 />
            </span>
            <p>Conveniently located with easy access and ample parking</p>
          </li>

          <li className="about-feature">
            <span>
              <FaLayerGroup />
            </span>
            <p>Accommodates intimate gatherings to large celebrations of 500+ guests</p>
          </li>

          <li className="about-feature">
            <span>
              <GiDustCloud />
            </span>
            <p>Dedicated event coordination and hospitality team</p>
          </li>
        </ul>

        <button className="about-btn">Reverse Your Date</button>
      </div>
    </div>
  );
};

export default About;
