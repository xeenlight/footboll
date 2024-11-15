import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChampionsLeague, MatchPage } from "./Pages/ChampionsLeague/ChampionsLeague";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from './Store/store';
import SavedMatchesPage from "./Pages/SavedMatchesPage/SavedMatchesPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import { PrimeiraLiga } from "./Pages/PrimeiraLiga/PrimeiraLiga";
import { PremierLeague } from "./Pages/PremierLeague/PremierLeague";
import { Eredivisie } from "./Pages/Eredivisie/Eredivisie";
import { Bundesliga } from "./Pages/Bundesliga/Bundesliga";
import { Ligue1 } from "./Pages/Ligue1/Ligue1";
import { SerieA } from "./Pages/SerieA/SerieA";
import { LaLiga } from "./Pages/LaLiga/LaLiga";
import { Championship } from "./Pages/Championship/Championship";
import { SerieABr } from "./Pages/SerieABr/SerieABr";
import { Worldcup } from "./Pages/Worldcup/Worldcup";
import { European } from "./Pages/Europe/European";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/1",
      element: <ChampionsLeague />,
    },
    {
      path: "/2",
      element: <PrimeiraLiga />,
    },
    {
      path: "/3",
      element: < PremierLeague/>,
    },
    {
      path: "/4",
      element: < Eredivisie/>,
    },
    {
      path: "/5",
      element: < Bundesliga/>,
    },
    {
      path: "/6",
      element: <Ligue1/>,
    },
    {
      path: "/7",
      element: <SerieA/>,
    },
    {
      path: "/8",
      element: <LaLiga/>,
    },
    {
      path: "/9",
      element: <Championship/>,
    },
    {
      path: "/10",
      element: <SerieABr/>,
    },
    {
      path: "/11",
      element: <Worldcup/>,
    },
    {
      path: "/12",
      element: <European/>,
    },
    {
      path: "/100",
      element: <SavedMatchesPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
