export default class HeroModel {
  id: number;
  name: string;
  image: string;
  civil: string;
  age: number;
  ville: string;

  constructor(
    id: number,
    name: string = "",
    image: string = "",
    civil: string = "",
    age: number = 0,
    ville: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.civil = civil;
    this.age = age;
    this.ville = ville;
  }
}
