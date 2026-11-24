import "./styles/howToOrder.scss";

const HowToOrder = () => {
  const howToOrder = [
    {
      header: "Choose your scent",
      body: "Browse the collection and note the names you like.",
    },
    {
      header: "Send us a message",
      body: "DM us on Instagram or TikTok with the perfume name and your location.",
    },
    {
      header: "Receive your bottle",
      body: "Confirm payment, then we deliver or you collect in Surulere.",
    },
  ];
  return (
    <div>
      <section className="how_to_order_general_box" id="order">
        <div className="how_to_order_intro">
          <h2 className="how_to_order_title">How to order</h2>
          <p className="how_to_order_subtitle">
            Ordering takes three simple steps.
          </p>
        </div>
        <div className="how_to_order_steps">
          {howToOrder.map((step, idx) => (
            <div className="how_to_order_step_card" key={idx}>
              <p className="how_to_order_step_number">{idx + 1}</p>
              <p className="how_to_order_step_title">{step.header}</p>
              <p className="how_to_order_step_body">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default HowToOrder;
