import Link from "next/link";
import { CopyEmail } from "./copy-email";
import { Mark } from "./mark";

const EMAIL = "contact@madepossible.ca";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="header">
          <Link className="wordmark" href="/" aria-label="MadePossible home">
            <Mark size={22} />
            <span>MadePossible</span>
          </Link>
          <a className="headerLink" href={`mailto:${EMAIL}`}>
            <span className="long">{EMAIL}</span>
            <span className="short">Email us</span>
          </a>
        </header>

        {/* The two halves slide in along their straight arms and lock as "IM" is cut away. */}
        <div className="stage">
          <Mark className="heroMark" />
        </div>

        <div className="fit">
          <h1 className="headline">
            <span className="srOnly">Made possible.</span>
            <span className="mask" aria-hidden="true">
              <span className="made">Made</span>
            </span>
            <span className="mask" aria-hidden="true">
              <span className="rise">
                {/* "Im" is laser-cut away on load, and "possible." widens to reclaim its space. */}
                <span className="im">
                  <span className="imGhost">Im</span>
                  <span className="imTop">Im</span>
                  <span className="imBottom">Im</span>
                  <span className="laser" />
                </span>
                <span className="possible">possible.</span>
              </span>
            </span>
          </h1>

          <div className="aside">
            <p>A technology company turning hard ideas into working products.</p>
            <a className="button" href={`mailto:${EMAIL}`}>
              Email us
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contactIntro">
          <h2 id="contact-title">Have something that sounds impossible?</h2>
          <p>Tell us what you want to build.</p>
        </div>

        <div className="contactFit">
          <a className="email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <CopyEmail email={EMAIL} />
        </div>

        <footer className="footer">
          <Mark size={16} />
          <span>© {new Date().getFullYear()} MadePossible</span>
        </footer>
      </section>
    </main>
  );
}
