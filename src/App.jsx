import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import StagePage from "./views/StagePage";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";

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
        path: "stagepage/:stageId",
        element: <StagePage/>
      },
      {
        path: "detailpage/:eventId",
        element: <DetailPage />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router}/>
}