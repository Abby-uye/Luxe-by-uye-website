import Combos from "./Combos";
import FindYour from "./FindYour";
import Hero from "./Hero";
import HowToOrder from "./HowToOrder";
import OurStory from "./OurStory";
import Shop from "./Shop";

const HomePage = () => {
  return (
    <div id="home-after-intro" className="home_after_intro">
      <Hero />
      <Shop />
      <Combos />
      <OurStory  />
      <HowToOrder />
      <FindYour />
    </div>
  );
};

export default HomePage;
