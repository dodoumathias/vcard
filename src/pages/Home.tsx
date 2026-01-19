import React from "react"
import profilePic from "../assets/profile.png" 

const Home: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-tob from-slate-900 to-slate-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
        
        {/* Texte */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold text-sky-400 mb-4">Dodou Mathias Mahudo</h1>
          <p className="text-white/80 text-lg mb-6">
            DevOps & SysAdmin | Automatisation | CI/CD | Docker | Kubernetes | Cloud
          </p>
          <a
            href="/public/CV.pdf"
            className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition"
          >
            Télécharger mon CV
          </a>
        </div>

        {/* Photo */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
          src={profilePic}
          alt="Dodou Mathias Mahudo"
          className="w-60 h-auto md:w-72 md:h-auto object-contain border-4  shadow-lg"
        />

        </div>

      </div>
    </section>
  )
}

export default Home
