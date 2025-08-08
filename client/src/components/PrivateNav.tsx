import { useState, useEffect } from "react";

interface PrivateNavProps {
  isScrolled: boolean;
}

export default function PrivateNav({ isScrolled }: PrivateNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/"; // redirect to home
  }

  return (
    <nav className={`navbar ${navScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">LOGO</div>

      <div className="nav-links desktop">
        <a href="/profile">Profile</a>
        <a href="/progress">Progress</a>
        <a href="/schedule">Schedule Session</a>
        <a href="/upgrade">Upgrade Service</a>
      </div>

      <div className="nav-right desktop">
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
            Profile
          </a>
          <a href="/progress" onClick={() => setIsMobileMenuOpen(false)}>
            Progress
          </a>
          <a href="/schedule" onClick={() => setIsMobileMenuOpen(false)}>
            Schedule Session
          </a>
          <a href="/upgrade" onClick={() => setIsMobileMenuOpen(false)}>
            Upgrade Service
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
