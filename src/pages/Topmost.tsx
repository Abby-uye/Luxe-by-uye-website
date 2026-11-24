import { useMemo } from "react";
import heroPoster from "../assets/hero-poster.jpg";
import heroVideo from "../assets/hero-video.mp4";
import "./styles/topmost.scss";

const TITLE = "LUXE BY UYE";

const Topmost = () => {
  const words = useMemo(() => {
    let index = 0;
    return TITLE.split(" ").map((word) => ({
      word,
      letters: word.split("").map((letter) => ({
        letter,
        index: index++,
      })),
    }));
  }, []);

  return (
    <section className="topmost" data-nav="dark" aria-label="Welcome">
      <div className="topmost_blobs" aria-hidden="true">
        <span className="topmost_blob topmost_blob--one" />
        <span className="topmost_blob topmost_blob--two" />
        <span className="topmost_blob topmost_blob--three" />
        <span className="topmost_blob topmost_blob--four" />
      </div>
      <div className="topmost_video_wrap">
        <video
          className="topmost_video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="topmost_overlay" />
      </div>
      <div className="topmost_copy">
        <p className="topmost_kicker">Perfumes · Surulere, Lagos</p>
        <p className="topmost_title" role="heading" aria-label="LUXE BY UYE">
          {words.map((word) => (
            <span className="topmost_word" key={word.word}>
              {word.letters.map(({ letter, index }) => (
                <span
                  className="topmost_letter"
                  key={`${word.word}-${index}`}
                  style={{ ["--i" as string]: index }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </p>
        <span className="topmost_rule" />
        <p className="topmost_tagline">Elevate your scent story.</p>
      </div>
      <a className="topmost_scroll" href="#top">
        Scroll
        <span className="topmost_scroll_chevron" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Topmost;
