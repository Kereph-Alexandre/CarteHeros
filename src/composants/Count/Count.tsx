import { useState, useEffect } from "react";
import "./Count.css";

// type QQch = {
//   truc: string;
//   machin: number;
// };

export const Count: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => console.log(count), [count]);

  return (
    <div className="count">
      <span>{count}</span>
      <button className="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
