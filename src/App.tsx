import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage} from "./Pages/MainPage/MainPage"
import { LoginPage } from "./Pages/LoginPage/LoginPage";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>
    },
    {
      path:"/2",
      element:<LoginPage/>
    },
  ])

  return (

      <div className="App">
        <RouterProvider router={router}/>
      </div>

  );
}

export default App;
