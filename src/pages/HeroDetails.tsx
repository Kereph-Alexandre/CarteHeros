import { HeroFile } from "../composants/HeroFile/HeroFile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import superHeros from "../models/HeroModel";
import HeroService from "../services/heroService";

export const HeroDetails: React.FC = () => {
  const { id } = useParams<string>();
  const [heroChosen, setHeroChosen] = useState<superHeros>();

  useEffect(() => {
    if (id) {
      HeroService.getHero(+id).then((data) => {
        setHeroChosen(data);
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
