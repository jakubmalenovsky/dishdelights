import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./theme";
import Layout from "./Layout";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import RecipesView from "./views/RecipesView";
import FavView from "./views/FavView";
import DetailPage from "./views/DetailPage";

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
      }
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );

}