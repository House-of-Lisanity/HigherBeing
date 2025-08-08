import { useState, useEffect } from "react";
interface PublicNavProps {
  isScrolled: boolean;
}

export default function PublicNav({ isScrolled }: PublicNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id: string) {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <nav className={`navbar ${navScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">LOGO</div>

      <div className="nav-links desktop">
        <button onClick={() => scrollToSection("#services")}>Services</button>
        <button onClick={() => scrollToSection("#about")}>About Me</button>
        <button onClick={() => scrollToSection("#reviews")}>Reviews</button>
        <button onClick={() => scrollToSection("#contact")}>Contact</button>
      </div>

      <div className="nav-right desktop">
        <a href="/login" className="login-btn">
          Login
        </a>
      </div>

      <div
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection("#services")}>Services</button>
          <button onClick={() => scrollToSection("#about")}>About Me</button>
          <button onClick={() => scrollToSection("#reviews")}>Reviews</button>
          <button onClick={() => scrollToSection("#contact")}>Contact</button>
          <a
            href="/login"
            className="login-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
