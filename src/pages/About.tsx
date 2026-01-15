import React from "react"

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-sky-400 mb-6">À propos</h2>
      <p className="text-white/80 mb-4">
        Je suis passionné par l'automatisation et l'administration des systèmes. 
        Je crée des pipelines CI/CD robustes, déploie des applications conteneurisées 
        avec Docker et Kubernetes, et assure la fiabilité des environnements cloud.
      </p>
      <p className="text-white/80">
        Mon objectif est de rendre les infrastructures modernes, scalables et sécurisées,
        tout en optimisant les workflows DevOps et en réduisant le temps de déploiement.
      </p>
    </section>
  )
}

export default About
