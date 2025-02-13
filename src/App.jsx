import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import RecipesView from "./views/RecipesView";
import FavView from "./views/FavView";

const router = createBrowserRouter([
  {
    path: "/dishdelights/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "ContactView",
        element: <ContactView />
      },
      {
        path: "FavView",
        element: <FavView />
      },
      {
        path: "RecipesView",
        element: <RecipesView />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router}/>
}