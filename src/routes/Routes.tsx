import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Layout } from "../layout/Layout";
import { Articles } from "../pages/articles/articles";
import { Categories } from "../pages/categories/Categories";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="login/*" element={
                <PublicRoute>
                  <Routes>
                    <Route path="/*" element={<Login />} />
                  </Routes>
                </PublicRoute>
              }
            />
            <Route path="/*" element={
              <PrivateRoute>
                <Routes>
                  <Route path="/" element={<Layout/>}>
                    <Route path="categories" element={<Categories/>} />
                    <Route path="articles/:categorieType" element={<Articles/>} />
                  </Route>
                </Routes>
              </PrivateRoute>
            } />
        </Routes>
    </>
  )
}

