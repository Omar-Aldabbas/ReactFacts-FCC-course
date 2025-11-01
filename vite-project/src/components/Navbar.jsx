import Logo from "../assets/react.svg";

export const Navbar = () => {
  return (
    <header>
      <nav className="new-nav">
        <img src={Logo} alt="React logo" width={40} />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
};
