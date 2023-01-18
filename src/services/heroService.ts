import HeroModel from "../models/HeroModel";

export default class HeroService {
  static getHeroes(): Promise<HeroModel[]> {
    return fetch("http://localhost:3004/superHeros/").then((response) =>
      response.json()
    );
  }
  static getHero(id: number): Promise<HeroModel> {
    return fetch(`http://localhost:3004/superHeros/${id}`).then((response) =>
      response.json().then((data) => (this.empty(data) ? null : data))
    );
  }

  static empty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
}
