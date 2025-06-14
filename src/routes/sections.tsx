import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

export const HomePage = lazy(() => import("../pages/home-page"));

export const routesSections: RouteObject[] = [
  {
    id: "index",
    path: "/",
    element: <HomePage />,
  },
];
