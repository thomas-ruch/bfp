function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-citation">
          <p>Crois-tu qu'il l'a fait ?</p>
        </div>
        <div className="footer-legal-notice">
          <span>
            © RustineMan,
            <br className="conditionnal-break" />
            Tous droits réservés
          </span>
        </div>
        <div className="footer-icons">
          <a
            href="https://bsky.app/profile/rustineman.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Retrouver RustineMan sur Bluesky"
          >
            <i className="fa-brands fa-bluesky fa-2x" aria-hidden="true"></i>
          </a>
          <a 
            href="mailto:rustineman@gmail.com"
            aria-label="Envoyer un courriel à RustineMan"
          >
            <i className="fa-solid fa-at fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
