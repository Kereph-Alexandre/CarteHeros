import "./cardHero.css";
import superHeros from "../../models/HeroModel";

type CardProps = {
  superHero: superHeros;
};

export const CardHero: React.FC<CardProps> = ({ superHero }) => {
  return (
    <>
      <div className="card">
        <img src={superHero.image} alt="Illustration" />
        <div className="card-body">
          <div className="card-header">
            <h2>{superHero.name}</h2>
          </div>
          <p>alias : {superHero.civil}</p>
          <p>age : {superHero.age}</p>
          <p>agit à : {superHero.ville}</p>
        </div>
      </div>
    </>
  );
};
