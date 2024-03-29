import { Outlet } from "react-router-dom"
import { Categories } from "../pages/categories/Categories"
import './Layout.css';

export const Layout = () => {

  return (
    <div className="containerLayout">
      <div>
          <Categories/>
      </div>
      <Outlet />
    </div>
  )
}
