import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import NewMovies from "./pages/NewMovies";
import NewDetails from "./pages/NewDetails";
//definim rutele
const router =createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    errorElement: <Page404/>
  },
  {
    path:"favorites",
    element: <Favorites/>
  },
  {
    path:"/category/:categoryId",
    element: <NewMovies/>
  },
  {
    path:"/movies/:moviesId",
    element: <NewDetails/>
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
