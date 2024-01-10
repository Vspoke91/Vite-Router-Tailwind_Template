import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";

//Pages
import HomePage from "@Pages/home/HomePage";
import AboutPage from "@Pages/about/AboutPage";
import ErrorPage from "@Pages/error/ErrorPage";

export default function Router() {
  const routesElements = (
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routesElements));
  return <RouterProvider router={router} />;
}
