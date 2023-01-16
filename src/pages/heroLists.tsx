import { useState, useEffect } from "react";
import { CardHero } from "../composants/CardHero/cardHero";
import { heros } from "../data/heros";
import Heros from "../models/superHeros";

export const HeroLists: React.FC = () => {
  const [heroList, setHeroList] = useState<Array<Heros>>([]);

  useEffect(() => setHeroList(heros), []);

  return (
    <div className="heros">
      {heroList.map((hero) => (
        <CardHero key={hero.id} superHero={hero} />
      ))}
    </div>
  );
};
