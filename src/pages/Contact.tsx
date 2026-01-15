import React from "react"

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-sky-400 mb-6">Contact</h2>
      <p className="mb-2">
        Email : <a href="mailto:dodoumathias@gmail.com" className="text-sky-400 hover:underline">dodoumathias@gmail.com</a>
      </p>
      <p>
        GitHub : <a href="https://github.com/dodoumathias" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">github.com/dodoumathias</a>
      </p>
    </section>
  )
}

export default Contact
