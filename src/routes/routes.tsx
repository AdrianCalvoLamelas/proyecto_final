import { Route, Routes, RouteProps } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Layout } from "../layout/Layout";
import { Search } from "../components/search/search";
import { Articles } from "../pages/articles/articles";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="categories" element={<Layout/>} />
        <Route path="articles" element={<Articles/>} />
      </Route>
    </Routes>
  );
};
