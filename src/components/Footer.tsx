import { useEffect, useState } from "react";
import logo from "../assets/luxe-logo-full-transparent.png";
import { whatsappChat } from "../whatsapp";
import "./styles/footer.scss";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch (e) {}
  return null;
}

const exploreLinks = [
  { label: "Shop", path: "#shop" },
  { label: "Combos", path: "#combos" },
  { label: "Our story", path: "#story" },
  { label: "How to order", path: "#order" },
  { label: "Contact", path: "#contact" },
];

const Footer = () => {
  const [theme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  return (
    <footer className="footer_general_wrap" data-nav="dark">
      <div className="footer_logo_wrap">
        <img src={logo} alt="Luxe by Uye" />
      </div>

      <div className="footer_columns">
        <div className="footer_column">
          <p className="footer_heading">Explore</p>
          {exploreLinks.map((link) => (
            <a key={link.path} className="footer_link" href={link.path}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer_column">
          <p className="footer_heading">Visit us</p>
          <p className="footer_text">Surulere, Lagos</p>
          <p className="footer_text">Nigeria</p>
          <div className="footer_socials">
            <a
              className="footer_social"
              href="https://www.instagram.com/luxebyuyeperfume"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.6A4.4 4.4 0 1 0 16.4 12 4.4 4.4 0 0 0 12 7.6zm6.1-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z" />
              </svg>
            </a>
            <a
              className="footer_social"
              href="https://www.tiktok.com/@luxebyuyeperfume"
              target="_blank"
              rel="noopener"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 3c.4 2.4 1.8 4.1 4.2 4.4v2.5a7.2 7.2 0 0 1-4.2-1.3v6.7a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v2.7a3.2 3.2 0 1 0 2.2 3V3h2.7z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer_column footer_column--order">
          <p className="footer_heading">Ready to order?</p>
          <p className="footer_text">
            Message us on WhatsApp with the perfume you want and your location.
          </p>
          <a
            className="footer_order_button"
            href={whatsappChat(
              "Hello Luxe by Uye, I would like to place an order."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
          </a>
        </div>
      </div>

      <div className="footer_rule" />
      <p className="footer_copy">
        © 2026 Luxe by Uye · Surulere, Lagos · @luxebyuyeperfume
      </p>
    </footer>
  );
};

export default Footer;
