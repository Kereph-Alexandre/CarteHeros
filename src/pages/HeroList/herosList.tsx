import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardHero } from "../../composants/CardHero/cardHero";
import Heros from "../../models/HeroModel";
import HeroService from "../../services/heroService";

import "./herosList.css";

export const HeroLists: React.FC = () => {
  const [heroList, setHeroList] = useState<Array<Heros>>([]);

  useEffect(() => {
    HeroService.getHeroes().then((data) => {
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
