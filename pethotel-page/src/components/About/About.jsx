import "./About.css";
import "swiper/css";

import { useRef } from "react";
import { register } from "swiper/element/bundle";

import avatar1 from "../../assets/images/av1.jpg";
import avatar2 from "../../assets/images/av2.jpg";
import avatar3 from "../../assets/images/av3.jpg";


register();

const About = () => {

const swiperElRef = useRef(null);

  return (
    <section id="aboutus">
      <div className="about-desc-wrap">
        <h2 className="about-heading">Our Team</h2>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet
          dolor repudiandae similique labore beatae laudantium at earum harum
          officiis?
        </p>
      </div>


      <div className="gallery-wrap">

        <swiper-container
          ref={swiperElRef}
          space-between={10}
          navigation="true"
        >
          <swiper-slide>
            <div className="about-slide-img-wrap">
              <img src={avatar1} alt="Person with pet" className="about-img" />
            </div>
            <div className="slide-desc-wrap">
              <h4 className="slide-name">Jane Doe</h4>
              <p className="slide-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dolorum maxime tempora doloremque laudantium a!
                Deserunt obcaecati mollitia labore aut?
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="about-slide-img-wrap">
              <img src={avatar2} alt="Person with pet" className="about-img" />
            </div>
            <div className="slide-desc-wrap">
              <h4 className="slide-name">Jane Smith</h4>
              <p className="slide-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dolorum maxime tempora doloremque laudantium a!
                Deserunt obcaecati mollitia labore aut?
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="about-slide-img-wrap">
              <img src={avatar3} alt="Person with pet" className="about-img" />
            </div>
            <div className="slide-desc-wrap">
              <h4 className="slide-name">John Doe</h4>
              <p className="slide-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dolorum maxime tempora doloremque laudantium a!
                Deserunt obcaecati mollitia labore aut?
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};

export default About;
