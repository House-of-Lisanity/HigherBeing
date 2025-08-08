import React from "react";
import { Link } from "react-router-dom"; // only if using react-router
// Otherwise just use <a> for static links

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1>HIGHER ✦ BEING</h1>
          <p>MIND • BODY • SOUL</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="photos">
          <img
            src="/img/mushroom.jpg"
            alt="mushroom"
            width={200}
            height={300}
          />
          <img src="/img/lily.jpg" alt="water lily" width={250} height={300} />
        </div>
        <div className="text">
          <h2>Philosophy</h2>
          <p>
            Awakening the highest potential within individuals by cultivating
            the mind, strengthening the body, and liberating the soul.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="three-pillars">
        <div className="pillar">
          <h3>mind</h3>
          <p>
            The key to discipline, peace, and perspective. Teaching practices to
            gain clarity, emotional control, and awareness of truth.
          </p>
        </div>
        <div className="pillar">
          <h3>body</h3>
          <p>
            The vehicle for the journey of life. Developing the physical body
            through training and education.
          </p>
        </div>
        <div className="pillar">
          <h3>soul</h3>
          <p>
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
            <p>
              Combining exercise and nutrition to help you build muscle faster.
            </p>
          </div>
        </div>
        <div className="links-box">
          <a href="/services/fitness">Individual Fitness Sessions</a>
          <a href="/services/group">Group Fitness Session</a>
          <a href="/services/wellness">Individual Wellness Mentorship</a>
          <a href="/resources">Educational Resources</a>
          <a href="/about">About Aztreus Coaching</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="logo">
          <img
            src="/img/logo.png"
            alt="Higher Being Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="contact-info">
          <h4>Office</h4>
          <p>
            1240 W Bayaud Ave
            <br />
            Denver, CO 80223
          </p>
        </div>
        <div className="hours">
          <h4>Business hours</h4>
          <p>Monday - Friday: 9am – 6pm</p>
          <p>Saturday: 9am - 12pm</p>
        </div>
        <div className="social">
          <span>Connect</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷
          </a>
        </div>
      </footer>
    </main>
  );
}
