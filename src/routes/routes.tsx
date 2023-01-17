import { RouteObject, useRoutes } from "react-router-dom";
import { HeroLists } from "../pages/HeroList/herosList";
import { HeroDetails } from "../pages/HeroDetails";
import { FormExo } from "../composants/Form/Form";
import { Get } from "../composants/Fetch/Get/Get";
import { GetId } from "../composants/Fetch/Get/GetId";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/HeroList",
      element: <HeroLists />,
    },
    {
      path: "/HeroDetails/:id",
      element: <HeroDetails />,
    },
    {
      path: "/fetch",
      element: <Get />,
    },
    {
      path: "/fetch/:id",
      element: <GetId />,
    },
    {
      path: "/Form",
      element: <FormExo />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Router;
