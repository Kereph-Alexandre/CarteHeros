import React, { useState } from "react";
import "./Form.css";

export const FormExo: React.FC = () => {
  const [personne, setPersonne] = useState<string>("Luke Skywalker");

  const changePersonne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonne(event.target.value);
    console.log(personne);
  };

  const soumettre = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Le formulaire est envoyé", { personne });
  };

  return (
    <div className="formPage">
      <div className="formulaire">
        <form onSubmit={soumettre}>
          <label htmlFor="nom">Nom : </label>
          <input
            type="text"
            id="name"
            name="nom"
            value={personne}
            onChange={changePersonne}
          />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};
