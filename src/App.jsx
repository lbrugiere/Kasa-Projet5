import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lodging from "./pages/Lodging/Lodging";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/lodging/:id", element: <Lodging /> },
      { path: "*", element: <Error/> },
    ],
  },
]);

export default function App() {

  return <RouterProvider router={router}/>;
}

