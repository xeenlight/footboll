import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MatchPage } from "./Pages/MatchPage/MatchPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from './Store/store';
import SavedMatchesPage from "./Pages/SavedMatchesPage/SavedMatchesPage";

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
      path: "/5",
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
