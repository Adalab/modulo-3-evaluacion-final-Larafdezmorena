import footerLogo from "../images/logo-footer.jpg";

function Footer() {
  return (
    <footer className="footer">
      <small>&copy; 2024 Howarts</small>
      <div>
        <img className="footer__logo" src={footerLogo} alt="logo carta" />
      </div>
    </footer>
  );
}

export default Footer;
