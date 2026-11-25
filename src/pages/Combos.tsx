import { useEffect, useRef } from "react";
import lovelyIcon from "../assets/combos/lovely-icon.jpg";
import vanillaCandy from "../assets/combos/vanilla-candy.jpg";
import matelotFresh from "../assets/combos/matelot-fresh.jpg";
import blackSeduction from "../assets/combos/black-seduction.jpg";
import vanillaMaverick from "../assets/combos/vanilla-maverick.jpg";
import vanillaCrush from "../assets/combos/vanilla-crush.jpg";
import sugerVanilla from "../assets/combos/suger-vanilla.jpg";
import pineappleIcon from "../assets/combos/pineapple-icon.jpg";
import purpleRomance from "../assets/combos/purple-romance.jpg";
import coconutIcon from "../assets/combos/coconut-icon.jpg";
import fresaFusion from "../assets/combos/fresa-fusion.jpg";
import alyaCoconut from "../assets/combos/alya-coconut.jpg";
import weekendCrush from "../assets/combos/weekend-crush.jpg";
import passionCare from "../assets/combos/passion-care.jpg";
import stormDove from "../assets/combos/storm-dove.jpg";
import iconAlya from "../assets/combos/icon-alya.jpg";
import sugerLovely from "../assets/combos/suger-lovely.jpg";
import vanillaDove from "../assets/combos/vanilla-dove.jpg";
import wardiFresh from "../assets/combos/wardi-fresh.jpg";
import { whatsappChat } from "../whatsapp";
import "./styles/combos.scss";

const combos: { name: string; image: string; alt: string; price: string }[] = [
  {
    name: "Lovely & Icon",
    image: lovelyIcon,
    alt: "Lovely, Mousuf Sexy and Riggs London Icon gift set",
    price: "17,500",
  },
  {
    name: "Vanilla Candy",
    image: vanillaCandy,
    alt: "Mousuf Wardi and Kaly Vanilla Candy Rock Sugar gift set",
    price: "23,500",
  },
  {
    name: "Matelot Fresh",
    image: matelotFresh,
    alt: "Mousuf Wardi, Matelot Emotion and Dove Go Fresh gift set",
    price: "17,500",
  },
  {
    name: "Black Seduction",
    image: blackSeduction,
    alt: "Storm Elixir Maverick and Hanna's Secret Black Seduction gift set",
    price: "15,500",
  },
  {
    name: "Vanilla Maverick",
    image: vanillaMaverick,
    alt: "Vanilla mist, Nivea, Valentinho and Storm Elixir Maverick gift set",
    price: "21,500",
  },
  {
    name: "Vanilla Crush",
    image: vanillaCrush,
    alt: "Now Women, Matelot Emotion and Vanilla Crush gift set",
    price: "20,500",
  },
  {
    name: "Suger Vanilla",
    image: sugerVanilla,
    alt: "Vanilla mist, Valentinho and Suger gift set",
    price: "22,500",
  },
  {
    name: "Pineapple Icon",
    image: pineappleIcon,
    alt: "Suger Pineapple and Riggs London Icon gift set",
    price: "19,000",
  },
  {
    name: "Purple Romance",
    image: purpleRomance,
    alt: "Mousuf Wardi, Nivea and Hanna's Secret Purple Romance gift set",
    price: "26,000",
  },
  {
    name: "Coconut Icon",
    image: coconutIcon,
    alt: "Riggs London Icon, Mousuf Alya and coconut mist gift set",
    price: "21,000",
  },
  {
    name: "Fresa Fusion",
    image: fresaFusion,
    alt: "Fresa mist, Lovely, Valentinho and Storm Elixir Fusion gift set",
    price: "21,500",
  },
  {
    name: "Alya Coconut",
    image: alyaCoconut,
    alt: "Mousuf Wardi, Mousuf Alya and coconut mist gift set",
    price: "21,500",
  },
  {
    name: "Weekend Crush",
    image: weekendCrush,
    alt: "Mousuf Wardi, Weekend and Vanilla Crush gift set",
    price: "23,500",
  },
  {
    name: "Passion Care",
    image: passionCare,
    alt: "Storm Elixir, Matelot Emotion and Dove Advanced Care gift set",
    price: "24,000",
  },
  {
    name: "Storm & Dove",
    image: stormDove,
    alt: "Storm Elixir Maverick and Dove Advanced Care gift set",
    price: "20,500",
  },
  {
    name: "Icon & Alya",
    image: iconAlya,
    alt: "Riggs London Icon and Mousuf Alya gift set",
    price: "17,500",
  },
  {
    name: "Suger & Lovely",
    image: sugerLovely,
    alt: "Coconut mist, Lovely, Mousuf Sexy and Suger gift set",
    price: "23,500",
  },
  {
    name: "Vanilla Dove",
    image: vanillaDove,
    alt: "Vanilla mist, Valentinho and Dove Go Fresh gift set",
    price: "22,500",
  },
  {
    name: "Wardi Fresh",
    image: wardiFresh,
    alt: "Mousuf Wardi and Dove Go Fresh gift set",
    price: "23,500",
  },
];

const Arrow = ({ direction }: { direction: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d={direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const Combos = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<(direction: number) => void>(() => {});

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let setWidth = 0;
    let offset = 0;
    let paused = motion.matches;
    let last = performance.now();
    let frame = 0;
    let nudging = false;
    let nudgeFrom = 0;
    let nudgeTo = 0;
    let nudgeStart = 0;

    const wrap = (value: number) => {
      if (!setWidth) return value;
      let next = value;
      while (next >= 0) next -= setWidth;
      while (next < -setWidth) next += setWidth;
      return next;
    };

    const apply = () => {
      const shown = wrap(offset);
      track.style.transform = `translate3d(${shown}px, 0, 0)`;
      if (!nudging) offset = shown;
    };

    const measure = () => {
      const width = track.scrollWidth / 2;
      if (!width) return;
      setWidth = width;
      if (offset === 0) offset = -setWidth;
      offset = wrap(offset);
      apply();
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (setWidth) {
        if (nudging) {
          const t = Math.min(1, (now - nudgeStart) / 680);
          const eased = 1 - (1 - t) ** 3;
          offset = nudgeFrom + (nudgeTo - nudgeFrom) * eased;
          if (t >= 1) {
            offset = nudgeTo;
            nudging = false;
          }
        } else if (!paused) {
          offset += 46 * dt;
        }
        apply();
      }
      frame = requestAnimationFrame(tick);
    };

    stepRef.current = (direction) => {
      const card = track.querySelector<HTMLElement>(".combo_card");
      if (!card || !setWidth) return;
      const gap =
        parseFloat(getComputedStyle(track).getPropertyValue("--combo-gap")) || 0;
      const distance = direction * (card.offsetWidth + gap);
      nudgeFrom = offset;
      nudgeTo = nudging ? nudgeTo + distance : offset + distance;
      nudgeStart = performance.now();
      nudging = true;
    };

    const hold = () => {
      paused = true;
    };
    const release = () => {
      paused = motion.matches || document.hidden || stage.matches(":hover");
    };

    stage.addEventListener("pointerenter", hold);
    stage.addEventListener("pointerleave", release);
    document.addEventListener("visibilitychange", release);
    motion.addEventListener("change", release);

    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    measure();
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      stage.removeEventListener("pointerenter", hold);
      stage.removeEventListener("pointerleave", release);
      document.removeEventListener("visibilitychange", release);
      motion.removeEventListener("change", release);
    };
  }, []);

  const slides = [0, 1].flatMap((copy) =>
    combos.map((combo, index) => ({ ...combo, copy, index })),
  );

  return (
    <section className="combos_general_wrap" id="combos" data-nav="dark">
      <div className="combos_intro">
        <h2 className="combos_title">Our combos</h2>
        <p className="combos_subtitle">
          Pair your favourites and save. Perfect for gifting or for building
          your scent wardrobe.
        </p>
      </div>

      <div className="combos_stage" ref={stageRef}>
        <button
          type="button"
          className="combos_arrow combos_arrow--prev"
          aria-label="Scroll combos right"
          onClick={() => stepRef.current(1)}
        >
          <Arrow direction="right" />
        </button>

        <div className="combos_viewport">
          <div className="combos_track" ref={trackRef}>
            {slides.map((combo) => (
              <article
                className="combo_card"
                key={`${combo.name}-${combo.copy}`}
                aria-hidden={combo.copy === 1 || undefined}
                inert={combo.copy === 1 || undefined}
              >
                <div className="combo_photo_wrap">
                  <img
                    className="combo_photo"
                    src={combo.image}
                    alt={combo.copy === 1 ? "" : combo.alt}
                    draggable={false}
                    loading={combo.copy === 0 && combo.index < 4 ? "eager" : "lazy"}
                  />
                </div>
                <div className="combo_details">
                  <p className="combo_name">{combo.name}</p>
                  <p className="combo_price">
                    {combo.price ? `₦${combo.price}` : "Ask us"}
                  </p>
                  <a
                    className="combo_button"
                    href={whatsappChat(
                      `Hello Luxe by Uye, I would like to order the ${combo.name} combo (₦${combo.price}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={combo.copy === 1 ? -1 : undefined}
                  >
                    Order this combo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="combos_arrow combos_arrow--next"
          aria-label="Scroll combos left"
          onClick={() => stepRef.current(-1)}
        >
          <Arrow direction="left" />
        </button>
      </div>
    </section>
  );
};

export default Combos;
