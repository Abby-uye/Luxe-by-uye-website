import { whatsappChat } from "../whatsapp";
import "./styles/findYour.scss";

const FindYour = () => {
  return (
    <section className="find_your_general_box" id="contact">
      <h2 className="find_your_title">Find your signature scent</h2>
      <p className="find_your_subtitle">
        Visit us in Surulere, Lagos, or message us to place an order.
      </p>
      <a
        className="find_your_button"
        href={whatsappChat(
          "Hello Luxe by Uye, I would like help finding my signature scent."
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Send us a message
      </a>
    </section>
  );
};

export default FindYour;
