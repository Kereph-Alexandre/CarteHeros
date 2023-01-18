import { Link } from "react-router-dom";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <header className="headerGeneral">
      <img
        src="https://beet.gr/wp-content/uploads/2021/05/dc-comics-banner-2000x566.jpg"
        alt="DC Comics Banner"
      />
      <nav className="headerNav">
        <Link to="/HeroList">Liste</Link>
        <Link to="/AddHero">Ajouter</Link>
      </nav>
    </header>
  );
};
