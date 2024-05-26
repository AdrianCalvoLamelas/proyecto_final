import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar";
import './Layout.css';

export const Layout = () => {

  return (
    <div className="containerLayout">
      <Navbar/>
      <Outlet />
    </div>
  )
}
