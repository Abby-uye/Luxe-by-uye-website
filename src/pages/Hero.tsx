import Button from "../reuseables/Buttons";
import "./styles/home.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero_inner">
        <div className="hero_copy">
          <h1 className="hero_title">
            ELEVATE YOUR
            <br />
            SCENT STORY.
          </h1>
          <p className="hero_text">
            Discover our curated collection of rich, long-lasting perfumes that
            redefine everyday luxury.
          </p>
          <Button text="Shop the collection" color="gold" href="#shop" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
