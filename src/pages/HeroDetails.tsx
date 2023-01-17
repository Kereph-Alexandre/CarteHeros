import { HeroFile } from "../composants/HeroFile/HeroFile";
import { heros } from "../data/heros";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import superHeros from "../models/superHeros";

export const HeroDetails: React.FC = () => {
  const { id } = useParams<string>();
  const [heroChosen, setHeroChosen] = useState<superHeros>();

  useEffect(() => {
    if (id) {
      heros.forEach((hero) => {
        if (hero.id === +id) {
          setHeroChosen(hero);
        }
      });
    }
  }, [id]);

  if (heroChosen) {
    return (
      <>
        <HeroFile superHero={heroChosen} />
      </>
    );
  } else return <></>;
};
