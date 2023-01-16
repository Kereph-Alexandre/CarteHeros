import "./App.css";
import { Card } from "./composants/card";

const heros = [
  {
    id: 1,
    name: "Batman",
    image: "https://www.superherodb.com/gallery2/075/395/39568.webp",
    civil: "Bruce Wayne",
    age: 35,
    ville: "Gotham City",
  },
  {
    id: 2,
    name: "Superman",
    image: "https://www.superherodb.com/gallery2/075/475/47594.webp",
    civil: "Clark Kent",
    age: 28,
    ville: "Metropolis",
  },
  {
    id: 3,
    name: "Green Lantern",
    image: "https://www.superherodb.com/gallery2/075/181/18105.webp",
    civil: "Hal Jordan",
    age: 30,
    ville: "Coast City",
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      {heros.map((hero) => (
        <Card {...hero} />
      ))}
    </div>
  );
};

export default App;
