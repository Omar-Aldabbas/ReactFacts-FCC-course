import { createRoot } from "react-dom/client";
import Page from "./pages/Page.jsx";
import "./index.css";

function Img() {
  return <img src="vite.svg" alt="React Logo" width={40} />;
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

function Footer() {
  return <footer>© {new Date().getFullYear()} Learning new things</footer>;
}

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Page />

    <Footer />
  </>
);
