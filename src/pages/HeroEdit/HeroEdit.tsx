import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeroForm } from "../../composants/HeroForm/HeroForm";
import HeroModel from "../../models/HeroModel";

export const HeroEdit: React.FC = () => {
  const [hero, setHero] = useState<HeroModel>();

  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`http://localhost:3004/superHeros/${id}`)
      .then((response) => response.json())
      .then((data) => setHero(data));
  }, [id]);

  console.log(hero);

  return (
    <main>
      {hero?.id ? (
        <>
          <h2>Editer : {hero?.name}</h2>
          <HeroForm heroProp={hero} />
        </>
      ) : (
        <>
          <h2>Ce héros n'existe pas</h2>
        </>
      )}
    </main>
  );
};
