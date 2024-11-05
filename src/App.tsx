import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { MatchPage } from "./Pages/MatchPage/MatchPage";
import { CompetitionsPage } from "./Pages/CompetitionsPage/CompetitionsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from './Store/store';
import { StatsPage } from "./Pages/StatsPage/StatsPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MatchPage />,
    },
    {
      path: "/2",
      element: <MainPage />,
    },
    {
      path: "/3",
      element: <CompetitionsPage />,
    },
    {
      path: "/4",
      element: <StatsPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
