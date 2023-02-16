import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layouts/LayoutPublic";

import HeroesPage from "../pages/heroes/HeroesPage";
import MarvelPage from "../pages/marvel/MarvelPage";
import DCPage from "../pages/dc/DCPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NotFoundPage from "../pages/404/NotFoundPage";
import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/heroes/SearchPage";
import HeroPage from "../pages/heroes/HeroPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        errorElement: <NotFoundPage/>,
        children: [
          {
            index: true,
            element: <LandingPage/>,
          },
          {
            path: "/heroes",
            element: <HeroesPage/>,
          },
          {
            path: "/marvel",
            element: <MarvelPage/>,
          },
          {
            path: "/dc",
            element: <DCPage/>
          },
          {
            path: "/search",
            element: <SearchPage/>
          },
          {
            path: "/hero/:id",
            element: <HeroPage/>
          },
          {
            path: "/login",
            element: <LoginPage/>,
          },
          {
            path: "/register",
            element: <RegisterPage/>
          },
        ]
      }
    ]
  }
])