import { Link } from "react-router-dom";
import superHeros from "../../models/HeroModel";
import "./HeroFile.css";
import { FiEdit } from "react-icons/fi";

type CardProps = {
  superHero: superHeros;
};

export const HeroFile: React.FC<CardProps> = ({ superHero }) => {
  return (
    <>
      <header className="fileHeader">
        <img className="fileImage" src={superHero.image} alt={superHero.name} />
        <h2>{superHero.name}</h2>
      </header>
      <div className="heroFile">
        <div className="summerize">
          <Link to={`/HeroEdit/${superHero.id}`}>
            <button>
              <FiEdit />
            </button>
          </Link>
          <p>
            {superHero.name} opère la plupart du temps à {superHero.ville}.
          </p>
          <p>identité secrète : {superHero.civil}</p>
          <p>age : {superHero.age}</p>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptate, consectetur esse dolores molestias illo minima explicabo
          consequuntur nulla veritatis rerum vel a eius mollitia non ea autem
          totam est.
        </div>
      </div>
    </>
  );
};
