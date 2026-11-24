import { useEffect, useState } from "react";
import "./styles/nav.scss";
import { routeLinks } from "../routes/routelinks.js";

export default function Navbar() {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const nav = document.querySelector(".nav_general_wrap");
      if (!nav) return;
      const box = nav.getBoundingClientRect();
      const probe = box.top + box.height / 2;
      const overDark = [...document.querySelectorAll("[data-nav='dark']")].some(
        (section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= probe && rect.bottom > probe;
        },
      );
      setOnDark((current) => (current === overDark ? current : overDark));
      document
        .querySelector(".safe_area_bar")
        ?.classList.toggle("safe_area_bar--light", overDark);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`nav_general_wrap${onDark ? " nav_general_wrap--light" : ""}`}
      id="top"
    >
      <a className="navbar_logo_wrap" href="/">
        LUXE BY UYE
      </a>

      <div className="navbar_link_wrap">
        {routeLinks.map(({ path, label }) => (
          <a className="nav_link" href={path} key={path}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
