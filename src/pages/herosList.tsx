import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardHero } from "../composants/CardHero/cardHero";
import { heros } from "../data/heros";
import Heros from "../models/superHeros";

import "./herosList.css";

export const HeroLists: React.FC = () => {
  const [heroList, setHeroList] = useState<Array<Heros>>([]);

  useEffect(() => setHeroList(heros), []);

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
