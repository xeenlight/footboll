import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from './Store/store';

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
      path: "/2",
      element: <LoginPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
