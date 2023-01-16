import { HeroFile } from "../composants/HeroFile/HeroFile";
import { heros } from "../data/heros";
import { useParams } from "react-router-dom";

export const HeroDetails: React.FC = () => {
  const { id } = useParams();
  let hero: any = heros[0];

  if (id) {
    if (heros.find((hero) => hero.id === +id)) {
      hero = heros.find((hero) => hero.id === +id);
    }
  }

  return (
    <>
      <HeroFile superHero={hero} />
    </>
  );
};
