import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/rubik";
import Layout from "./Layout";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import RecipesView from "./views/RecipesView";
import FavView from "./views/FavView";
import DetailPage from "./views/DetailPage";
import AbouView from "./views/AboutView";
import './App.css'; // Importing App.css

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
      },
      {
        path: "detailpage/:recipeId",
        element: <DetailPage />
      },
      {
        path: "aboutview",
        element: <AbouView />
      },

    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    
    </>
  );

}