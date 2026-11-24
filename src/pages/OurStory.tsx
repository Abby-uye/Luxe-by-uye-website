import "./styles/ourStory.scss";

const OurStory = () => {
  const ourStory = [
    {
      title: "Long-lasting",
      description: "Concentrated blends from morning to night.",
    },
    {
      title: "Gift-ready",
      description: "Elegant packaging for birthdays, weddings and thank-yous.",
    },
    {
      title: "Delivery across Lagos",
      description: "Collect in Surulere or have it brought to you.",
    },
  ];
  return (
    <section className="our_story_general_box" id="story">
      <div className="our_story_inner">
      <div className="our_story_intro">
        <h2 className="our_story_title">Our story</h2>
        <div className="our_story_body">
          <p>
            Luxe by Uye is a perfume house in Surulere, Lagos. Every fragrance
            we sell is chosen for how it wears: a confident opening, a warm
            heart and a trail that lasts all day.
          </p>
          <p>
            Whether you are shopping for yourself or for someone you love, we
            help you choose and pack every order with care.
          </p>
        </div>
      </div>
      <div className="our_story_features">
        {ourStory.map((story, idx) => (
          <div className="our_story_feature_card" key={idx}>
            <p className="our_story_feature_title">{story.title}</p>
            <p className="our_story_feature_description">{story.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
export default OurStory;
