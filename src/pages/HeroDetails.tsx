import { HeroFile } from "../composants/HeroFile/HeroFile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import superHeros from "../models/HeroModel";

export const HeroDetails: React.FC = () => {
  const { id } = useParams<string>();
  const [heroChosen, setHeroChosen] = useState<superHeros>();

  useEffect(() => {
    fetch(`http://localhost:3004/superHeros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHeroChosen(data);
      });
  }, [id]);

  if (heroChosen) {
    return (
      <>
        <HeroFile superHero={heroChosen} />
      </>
    );
  } else return <></>;
};
