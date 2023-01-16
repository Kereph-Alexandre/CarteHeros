import { RouteObject, useRoutes } from "react-router-dom";
import { HeroLists } from "../pages/heroLists";
import { Count } from "../composants/Count/Count";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/Count",
      element: <Count />,
    },
    {
      path: "/HeroList",
      element: <HeroLists />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Router;
