import { Fragment } from "react";
import { bestsellers } from "./bestsellers";
import { whatsappChat } from "../whatsapp";
import "./styles/bestseller.scss";

const shown = bestsellers.slice(0, 6);

const Shop = () => {
  return (
    <section className="shop_general_wrap" id="shop">
      <div className="shop_inner">
        <h2 className="shop_title_text">Best sellers</h2>
        <p className="shop_subtitle_text">
          Six signatures our customers keep coming back for.
        </p>
        <div className="shop_grid">
          {shown.map((perfume, index) => (
            <Fragment key={perfume.name}>
            <article className="shop_card">
              <div className="shop_card_visual">
                <img
                  className="shop_photo shop_photo--a"
                  src={perfume.image}
                  alt={perfume.name}
                />
                <img
                  className="shop_photo shop_photo--b"
                  src={perfume.hoverImage}
                  alt=""
                />
                <span className="shop_corner shop_corner--tl" />
                <span className="shop_corner shop_corner--br" />
              </div>
              <p className="shop_card_name">{perfume.name}</p>
              <p className="shop_card_notes">{perfume.notes}</p>
              <p className="shop_card_price">₦{perfume.price}</p>
              <a
                className="shop_order_button"
                href={whatsappChat(
                  `Hello Luxe by Uye, I would like to order ${perfume.name} (₦${perfume.price}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order now
              </a>
            </article>
            {index % 2 === 1 && index !== shown.length - 1 && (
              <hr className="shop_row_rule shop_row_rule--pair" />
            )}
            {index === 2 && <hr className="shop_row_rule shop_row_rule--trio" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
