import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

// Tableau des routes avec element
const routes = [
  {
    path: "/",
    name: "Accueil",
    element: <Home />
  },
  {
    path: "/about",
    name: "À propos",
    element: <About />
  },
  {
    path: "/projects",
    name: "Projets",
    element: <Projects />
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />
  }
]

export default routes
