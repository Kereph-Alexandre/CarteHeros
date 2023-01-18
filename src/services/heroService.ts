import HeroModel from "../models/HeroModel";

export default class HeroService {
  static getHeroes(): Promise<HeroModel[]> {
    return fetch("http://localhost:3004/superHeros/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }
  static getHero(id: number): Promise<HeroModel> {
    return fetch(`http://localhost:3004/superHeros/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.empty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  static createHero(hero: HeroModel): Promise<HeroModel> {
    return fetch(`http://localhost:3004/superHeros/`, {
      method: "POST",
      body: JSON.stringify(hero),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static updateHero(hero: HeroModel): Promise<HeroModel> {
    return fetch(`http://localhost:3004/superHeros/${hero.id}`, {
      method: "PUT",
      body: JSON.stringify(hero),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static deleteHero(hero: HeroModel): Promise<{}> {
    return fetch(`http://localhost:3004/superHeros/${hero.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static empty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static error(error: Error): void {
    console.error(error);
  }
}
