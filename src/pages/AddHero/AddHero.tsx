import { HeroForm } from "../../composants/HeroForm/HeroForm";
import HeroModel from "../../models/HeroModel";
import HeroService from "../../services/heroService";
import { useEffect, useState } from "react";

export const AddHero: React.FC = () => {
  const [newHero, setNewHero] = useState<HeroModel>();

  const getnewHero = async () => {
    try {
      const heros = await HeroService.getHeroes();
      const id = await heros[heros.length - 1].id;
      const newHero = new HeroModel(id + 1);
      setNewHero(newHero);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getnewHero();
  }, []);

  return (
    <main>
      <h2>Ajouter un Héro à votre liste</h2>
      {newHero ? (
        <HeroForm AddHero={true} heroProp={newHero} />
      ) : (
        <>Ne peut pas créer de nouveau Héro pour l'instant</>
      )}
    </main>
  );
};
