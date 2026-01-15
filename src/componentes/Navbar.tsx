import { NavLink } from "react-router-dom"
import routes from "../routes"

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-6 bg-slate-900 sticky top-0 z-50">
      {routes.map(route => (
        <NavLink
          key={route.path}
          to={route.path}
          end 
          className={({ isActive }) =>
            `text-sky-400 hover:underline transition ${
              isActive ? "underline decoration-2 decoration-sky-400" : ""
            }`
          }
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  )
}
