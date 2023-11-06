import { useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useEmblaCarousel from "embla-carousel-react";

import "./About.css";

import avatar1 from "../../assets/images/av1.jpg";
import avatar2 from "../../assets/images/av2.jpg";
import avatar3 from "../../assets/images/av3.jpg";

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, jump: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

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
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="about-slide-img-wrap">
                  <img
                    src={avatar1}
                    alt="Person with pet"
                    className="about-img"
                  />
                </div>
                <div className="slide-desc-wrap">
                  <h4 className="slide-name">Jane Doe</h4>
                  <p className="slide-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam dolorum maxime tempora doloremque laudantium a!
                    Deserunt obcaecati mollitia labore aut?
                  </p>
                </div>
              </div>
              <div className="embla__slide">
                <div className="about-slide-img-wrap">
                  <img
                    src={avatar2}
                    alt="Person with pet"
                    className="about-img"
                  />
                </div>
                <div className="slide-desc-wrap">
                  <h4 className="slide-name">Jane Smith</h4>
                  <p className="slide-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam dolorum maxime tempora doloremque laudantium a!
                    Deserunt obcaecati mollitia labore aut?
                  </p>
                </div>
              </div>
              <div className="embla__slide">
                <div className="about-slide-img-wrap">
                  <img
                    src={avatar3}
                    alt="Person with pet"
                    className="about-img"
                  />
                </div>
                <div className="slide-desc-wrap">
                  <h4 className="slide-name">John Doe</h4>
                  <p className="slide-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam dolorum maxime tempora doloremque laudantium a!
                    Deserunt obcaecati mollitia labore aut?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="embla__prev embla__btn" onClick={scrollPrev}>
        <FontAwesomeIcon icon={faChevronLeft} fixedWidth size="2x"/>
        </button>
        <button className="embla__next embla__btn" onClick={scrollNext}>
        <FontAwesomeIcon icon={faChevronRight} fixedWidth size="2x"/>
        </button>
        </div>
      </div>
    </section>
  );
};

export default About;
