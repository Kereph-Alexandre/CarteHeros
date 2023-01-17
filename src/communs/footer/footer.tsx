import { Link } from "react-router-dom";
import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <Link to={`/HeroList`}>
      <footer className="footerGeneral">
        <img
          src="https://mmos.com/wp-content/uploads/2021/12/dc-universe-online-ep-42-legion-of-doom-key-art-banner.jpg"
          alt="DC Comics Banner"
        />
      </footer>
    </Link>
  );
};
