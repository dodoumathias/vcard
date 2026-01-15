import React, { useEffect, useState } from "react"
import axios from "axios"

interface Repo {
  id: number
  name: string
  description: string | null
  stargazers_count: number
  forks_count: number
  html_url: string
  fork: boolean
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    axios
      .get<Repo[]>("https://api.github.com/users/dodoumathias/repos")
      .then(res => {
        const filtered = res.data.filter(repo => !repo.fork).slice(0, 6)
        setRepos(filtered)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-sky-400 mb-8 text-center">Projets GitHub</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map(repo => (
          <div
            key={repo.id}
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-white/80 mb-2">{repo.description || "Projet DevOps / Automation"}</p>
            <p className="text-white/60 text-sm mb-2">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:underline"
            >
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
