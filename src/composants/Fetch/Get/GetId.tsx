import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const GetId: React.FC = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div className="getFetch">
      <h2>{user?.name}</h2>
    </div>
  );
};
