import { Outlet } from "react-router-dom"
import { Menu } from "../components/menu/Menu"
import './Layout.css';

export const Layout = () => {
  const menuItems = [
    {name: "Motor", link: "/motor"},
    {name: "Frenos", link: "/frenos"},
    {name: "Filtros", link: "/filtros"},
    {name: "Carrocería", link: "/carroceria"},
    {name: "Suspensión", link: "/suspension"},
    {name: "Amortiguación", link: "/amortiguacion"},
  ];
  const selectedPath = '/motor'

  return (
    <div className="containerLayout">
      <div className="menu">
        <Menu elements={menuItems} selectedPath={selectedPath}/>
      </div>
      <Outlet />
    </div>
  )
}
