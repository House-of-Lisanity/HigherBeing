import React from "react";

export default function NavbarSimple() {
  return (
    <nav className="navbar-simple">
      {/* Left side: logo + brand name */}
      <div className="nav-logo">
        <img
          src="https://res.cloudinary.com/houseoflisanity/image/upload/v1755038741/logo_by9jju.jpg"
          alt="Higher Being Logo"
        />
        <span>Higher Being</span>
      </div>

      {/* Right side: single Home link */}
      <div className="nav-links">
        <a href="/">Home</a>
      </div>
    </nav>
  );
}

// import { useState, useEffect } from "react";
// interface PublicNavProps {
//   isScrolled: boolean;
// }

// export default function PublicNav({ isScrolled }: PublicNavProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [navScrolled, setNavScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setNavScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function scrollToSection(id: string) {
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   }

//   return (
//     <nav className={`navbar ${navScrolled ? "scrolled" : ""}`}>
//       <div className="nav-logo">LOGO</div>

//       <div className="nav-links desktop">
//         <button onClick={() => scrollToSection("#services")}>Services</button>
//         <button onClick={() => scrollToSection("#about")}>About Me</button>
//         <button onClick={() => scrollToSection("#reviews")}>Reviews</button>
//         <button onClick={() => scrollToSection("#contact")}>Contact</button>
//       </div>

//       <div className="nav-right desktop">
//         <a href="/login" className="login-btn">
//           Login
//         </a>
//       </div>

//       <div
//         className="mobile-menu-toggle"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         ☰
//       </div>

//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <button onClick={() => scrollToSection("#services")}>Services</button>
//           <button onClick={() => scrollToSection("#about")}>About Me</button>
//           <button onClick={() => scrollToSection("#reviews")}>Reviews</button>
//           <button onClick={() => scrollToSection("#contact")}>Contact</button>
//           <a
//             href="/login"
//             className="login-btn"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Login
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }
