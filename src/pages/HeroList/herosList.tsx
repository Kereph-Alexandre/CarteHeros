import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardHero } from "../../composants/CardHero/cardHero";
import Heros from "../../models/superHeros";

import "./herosList.css";

export const HeroLists: React.FC = () => {
  const [heroList, setHeroList] = useState<Array<Heros>>([]);

  useEffect(() => {
    fetch("http://localhost:3004/superHeros")
      .then((response) => response.json())
      .then((data) => {
        setHeroList(data);
      });
  }, []);

  console.log(heroList);

  return (
    <div className="heros">
      {heroList.map((hero) => (
        <Link to={`/HeroDetails/${hero.id}`}>
          <CardHero key={hero.id} superHero={hero} />
        </Link>
      ))}
    </div>
  );
};
