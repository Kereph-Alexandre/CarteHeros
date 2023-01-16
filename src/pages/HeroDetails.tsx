import { HeroFile } from "../composants/FicheHero/HeroFile";
import { heros } from "../data/heros";

export const HeroDetails: React.FC = () => {
  return (
    <>
      <HeroFile superHero={heros[0]} />
    </>
  );
};
