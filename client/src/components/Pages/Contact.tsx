import React from "react";
import PublicNav from "../PublicNav";
import Footer from "../Footer";

export default function Contact() {
  return (
    <main className="contact-page">
      <PublicNav />
      {/* Hero */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact</h1>
          <p>We’d love to hear from you.</p>
        </div>
      </section>

      {/* Panel */}
      <section className="contact-panel">
        <div className="panel-inner">
          <h2>Get in touch</h2>
          <p>
            Have questions about coaching, scheduling, or resources? Reach out
            anytime via email or Instagram.
          </p>

          <div className="cta-row">
            <a className="btn" href="mailto:higherbeingllc@gmail.com">
              Email Us
            </a>
            <a
              className="btn outline"
              href="https://www.instagram.com/keenanleal27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
