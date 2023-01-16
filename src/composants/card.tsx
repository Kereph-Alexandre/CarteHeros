import { Heros } from "../models/heros";
import "./card.css";

export const Card: React.FC<Heros> = ({
  id,
  name,
  image,
  civil,
  age,
  ville,
}) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="Illustration" />
        <div className="card-body">
          <h2>{name}</h2>
          <p>alias : {civil}</p>
          <p>age : {age}</p>
          <p>agit à : {ville}</p>
        </div>
      </div>
    </>
  );
};
