import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout.tsx";

import HomePage from "../pages/HomePage.tsx";

export default function AppRoutes() {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
}
