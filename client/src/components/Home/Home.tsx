import React from "react";
import { Link } from "react-router-dom"; // only if using react-router
// Otherwise just use <a> for static links

export default function Home() {
  return (
    <main className="home-page">
      <div className="construction-banner">
        Website under construction — in the meantime, you can find our contact
        info below.
        {/* <a
          href="mailto:info@higherbeing.com"
          style={{ textDecoration: "underline" }}
        >
          info@higherbeing.com
        </a> */}
      </div>
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <ul className="hero-pillars">
            <li>MIND</li>
            <li>BODY</li>
            <li>SOUL</li>
          </ul>
          <h1>HIGHER&nbsp;&nbsp;&nbsp;BEING</h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="image-col">
          <div className="photo-stack">
            <img
              className="stack-img img-a"
              src="https://res.cloudinary.com/houseoflisanity/image/upload/v1755019910/adam-snow-nIhLkX11C00-unsplash_pi9pwb.jpg"
              alt="mushroom"
            />
            <img
              className="stack-img img-b"
              src="https://res.cloudinary.com/houseoflisanity/image/upload/v1755019883/valentin-lacoste-2Dj18bTeh3I-unsplash_lg5epw.jpg"
              alt="water lily"
            />
          </div>
        </div>
        <div className="text-col">
          <div className="text">
            <h2>Philosophy</h2>
            <p>
              Awakening the highest potential within individuals by cultivating
              the mind, strengthening the body, and liberating the soul.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="three-pillars">
        <div className="pillar">
          <h3>mind</h3>
          <p className="text">
            The key to discipline, peace, and perspective. Teaching practices to
            gain clarity, emotional control, and awareness of truth.
          </p>
        </div>
        <div className="pillar">
          <h3>body</h3>
          <p className="text">
            The vehicle for the journey of life. Developing the physical body
            through training and education.
          </p>
        </div>
        <div className="pillar">
          <h3>soul</h3>
          <p className="text">
            Your connection to the divine. Reconnecting through cultivation of
            the inner environment.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview">
        <div className="image-box">
          <div className="overlay-text">
            <h2>Higher Being Coaching</h2>

            {/* minimalist barbell divider */}
            <img
              className="barbell"
              src="https://res.cloudinary.com/houseoflisanity/image/upload/v1755042415/barbell_j9y7ph.png"
              aria-hidden="true"
            />

            <p>
              Combining exercise and nutrition to help you build muscle faster.
            </p>
          </div>
        </div>
        <div className="text-box">
          <div className="links-box">
            <a href="/about">Flagship Program</a>
            <a href="/services/fitness">Individual Fitness Sessions</a>
            <a href="/services/group">Group Fitness Session</a>
            <a href="/services/wellness">Individual Wellness Mentorship</a>
            <a href="/resources">Educational Resources</a>

            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="top">
          {/* Brand row */}
          <div className="brand">
            <img
              src="https://res.cloudinary.com/houseoflisanity/image/upload/v1755038741/logo_by9jju.jpg"
              alt="Higher Being Logo"
              width={100}
              height={100}
            />
            <div className="brand-name">
              <span>HIGHER</span>
              <span>BEING</span>
              <span>LLC</span>
            </div>
          </div>

          {/* Address left, below brand */}
          <div className="contact">
            <h4>Office</h4>
            <address>
              1240 W Bayaud Ave
              <br />
              Denver, CO 80223
            </address>
          </div>

          {/* Hours centered on the row */}
          <div className="hours">
            <h4>Business hours</h4>
            <p>Monday – Friday: 9am – 6pm</p>
            <p>Saturday: 9am – 12pm</p>
          </div>
        </div>

        {/* Bottom band with borders */}
        <div className="connect-band">
          <span>Connect</span>
          <a
            className="icon"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            {/* simple FB SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2H14c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="icon"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            {/* simple IG SVG */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
