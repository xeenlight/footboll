import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChampionsLeague } from "./Pages/ChampionsLeague/ChampionsLeague";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from './Store/store'; // Импортируем checkUser
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
import { MatchToday } from "./Pages/MatchToday/MatchToday";
import { AppDispatch } from './Store/store'; // Импортируем тип Dispatch

function App() {
  const dispatch = useDispatch<AppDispatch>(); // Типизируем dispatch

  useEffect(() => {
    dispatch(checkUser()); 
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/ChampionsLeague",
      element: <ChampionsLeague />,
    },
    {
      path: "/PrimeiraLiga",
      element: <PrimeiraLiga />,
    },
    {
      path: "/PremierLeague",
      element: <PremierLeague />,
    },
    {
      path: "/Eredivisie",
      element: <Eredivisie />,
    },
    {
      path: "/Bundesliga",
      element: <Bundesliga />,
    },
    {
      path: "/Ligue1",
      element: <Ligue1 />,
    },
    {
      path: "/SerieA",
      element: <SerieA />,
    },
    {
      path: "/LaLiga",
      element: <LaLiga />,
    },
    {
      path: "/Championship",
      element: <Championship />,
    },
    {
      path: "/SerieABr",
      element: <SerieABr />,
    },
    {
      path: "/Worldcup",
      element: <Worldcup />,
    },
    {
      path: "/European",
      element: <European />,
    },
    {
      path: "/MatchToday",
      element: <MatchToday />,
    },
    {
      path: "/SavedMatchesPage",
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
