import "./HeroForm.css";
import HeroModel from "../../models/HeroModel";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type HeroProp = {
  heroProp: HeroModel;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type form = {
  name: champ;
  civil: champ;
  age: champ;
  ville: champ;
};

export const HeroForm: React.FC<HeroProp> = ({ heroProp }) => {
  const [heroForm, setHeroForm] = useState<form>({
    name: {
      value: heroProp.name,
      isValid: true,
    },
    civil: {
      value: heroProp.civil,
      isValid: true,
    },
    age: {
      value: heroProp.age,
      isValid: true,
    },
    ville: {
      value: heroProp.ville,
      isValid: true,
    },
  });

  const editHero = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setHeroForm({ ...heroForm, ...nouveauChamp });
  };
  const redirection = useNavigate();

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(heroForm);
    redirection(`/HeroDetails/${heroProp.id}`);
  };

  return (
    <div className="formContainer">
      <img src={heroProp.image} alt={heroProp.name} />
      <form className="heroForm" onSubmit={soumission}>
        <label htmlFor="name">SuperIdentité : </label>
        <input
          type="text"
          name="name"
          value={heroForm.name.value}
          onChange={editHero}
        />

        <label htmlFor="age">Age : </label>
        <input
          type="number"
          name="age"
          value={heroForm.age.value}
          onChange={editHero}
        />

        <label htmlFor="ville">Ville : </label>
        <input
          type="text"
          name="ville"
          value={heroForm.ville.value}
          onChange={editHero}
        />

        <label htmlFor="civil">Identité secrète : </label>
        <input
          type="text"
          name="civil"
          value={heroForm.civil.value}
          onChange={editHero}
        />

        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};
