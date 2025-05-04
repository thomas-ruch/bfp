function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-citation">
          <p>Crois-tu qu'il l'a fait ?</p>
        </div>
        <div className="footer-legal-notice">
          <span>
            © RustineMan -
            <br className="conditionnal-break" />
            Tous droits réservés
          </span>
        </div>
        <div className="footer-icons">
          <a
            href="https://bsky.app/profile/rustineman.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-bluesky fa-2x"></i>
          </a>
          <a href="mailto:rustineman@gmail.com">
            <i className="fa-solid fa-at fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
