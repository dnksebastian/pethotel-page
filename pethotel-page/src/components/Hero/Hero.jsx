import "./Hero.css";
import DogFriends from "./../../assets/images/undraw_friends.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content-wrap">
        <h1 className="hero-heading">Pet Hotel in Poznań</h1>
        <p className="hero-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo praesentium dolore ut illum cum obcaecati rerum libero perspiciatis blanditiis quae mollitia placeat rem animi repellendus commodi, odio a! Porro.</p>
        <button id="btn-hero">Book Now!</button>
      </div>
      <div className="hero-img">
        <div className="hero-img-wrap">
          <img src={DogFriends} alt="Illustration of a dog" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
