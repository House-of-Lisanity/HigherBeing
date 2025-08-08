export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="photo-credits">
          Photo credits:{" "}
          <a
            href="https://unsplash.com/@jeremythomasphoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeremy Thomas
          </a>{" "}
        </p>
      </div>

      <div className="footer-center">
        <p>© 2025 Higher Being</p>
      </div>

      <div className="footer-right">
        <p className="site-credit">
          Website built by{" "}
          <a
            href="https://www.houseoflisanity.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            House of Lisanity
          </a>
        </p>
      </div>
    </footer>
  );
}
