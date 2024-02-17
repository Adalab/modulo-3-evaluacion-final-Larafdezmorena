import headerLogo from "../images/harry-potter-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__box">
        <img
          className="header__logo"
          src={headerLogo}
          alt="logo Harry Potter"
        />
      </div>
    </header>
  );
}

export default Header;
