import "./HeroForm.css";
import HeroModel from "../../models/HeroModel";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroService from "../../services/heroService";

type HeroProp = {
  heroProp: HeroModel;
  AddHero: boolean;
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
  image: champ;
};

export const HeroForm: React.FC<HeroProp> = ({ heroProp, AddHero }) => {
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
    image: {
      value: heroProp.image,
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
    heroProp.name = heroForm.name.value;
    heroProp.age = heroForm.age.value;
    heroProp.civil = heroForm.civil.value;
    heroProp.ville = heroForm.ville.value;
    AddHero ? (heroProp.image = heroForm.image.value) : <></>;

    AddHero ? ajouter() : miseAJour();
  };

  const ajouter = () => {
    HeroService.createHero(heroProp).then(() =>
      redirection(`/HeroDetails/${heroProp.id}`)
    );
  };

  const miseAJour = () => {
    HeroService.updateHero(heroProp).then(() =>
      redirection(`/HeroDetails/${heroProp.id}`)
    );
  };

  const suppression = () => {
    HeroService.deleteHero(heroProp).then(() => redirection(`/HeroList`));
  };

  return (
    <div className="formContainer">
      <img src={heroProp.image} alt={heroProp.name} />
      <div className="totalForm">
        <form className="heroForm" onSubmit={soumission}>
          <label htmlFor="name">SuperIdentité : </label>
          <input
            type="text"
            name="name"
            value={heroForm.name.value}
            onChange={editHero}
            placeholder="Son SuperNom"
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
            placeholder="La ville dans laquelle il opère"
          />

          <label htmlFor="civil">Identité secrète : </label>
          <input
            type="text"
            name="civil"
            value={heroForm.civil.value}
            onChange={editHero}
            placeholder="Identité secrète de votre Héro"
          />

          {AddHero ? (
            <>
              <label htmlFor="image">Image : </label>
              <input
                type="text"
                name="image"
                value={heroForm.image.value}
                onChange={editHero}
                placeholder="URL de votre image"
              />
            </>
          ) : (
            <></>
          )}

          <input type="submit" value={AddHero ? "Ajouter" : "Valider"} />
        </form>
        {AddHero ? <></> : <button onClick={suppression}>Supprimer</button>}
      </div>
    </div>
  );
};
