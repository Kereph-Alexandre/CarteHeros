import { useState, useEffect } from "react";
import { CardHero } from "../composants/CardHero/cardHero";
import { heros } from "../data/heros";
import Heros from "../models/superHeros";

export const HeroLists: React.FC = () => {
  const [list, setList] = useState<Array<Heros>>([]);

  useEffect(() => setList(heros), []);

  return (
    <div className="heros">
      {list.map((hero) => (
        <CardHero key={hero.id} superHero={hero} />
      ))}
    </div>
  );
};
