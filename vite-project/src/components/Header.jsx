function Img() {
  return <img src="../vite.svg" alt="React Logo" width={40} />;
}

function Header() {
  return (
    <header className="navbar">
      <Img />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
