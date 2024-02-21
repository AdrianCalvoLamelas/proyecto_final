import { Route, Routes, RouteProps } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Search } from "../pages/search/search";
import { Layout } from "../layout/Layout";
import { Motor } from "../pages/motor/Motor";
import { Frenos } from "../pages/frenos/Frenos";

export const pagesRoutes: (RouteProps & { key: string })[] = [
  {
    key: "motor",
    path: "motor",
    element: <Motor />
  }, {
    key: "frenos",
    path: "frenos",
    element: <Frenos />
  }
]
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="/" element={<Layout/>}>
        {pagesRoutes.map((route) => (
          <Route {...route} />
        ))}
      </Route>
    </Routes>
  );
};
