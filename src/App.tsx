import { Routes, Route } from "react-router-dom"
import Navbar from "./componentes/Navbar"
import routes from "./routes"



export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}
