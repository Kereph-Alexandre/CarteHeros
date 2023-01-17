import { Link } from "react-router-dom";
import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <Link to={`/HeroList`}>
      <footer className="footerGeneral">
        <img
          src="https://variety.com/wp-content/uploads/2013/10/necessaryevil.jpg"
          alt="DC Comics Banner"
        />
      </footer>
    </Link>
  );
};
