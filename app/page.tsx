"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/LucasbnTosta/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 4)));
  }, []);

  return (
    <main>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between px-8 py-4 backdrop-blur-md bg-white/30 dark:bg-black/30 z-50 border-b border-white/10">
        <h1 className="font-bold">Lucas.dev</h1>
        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl font-bold mb-6 leading-tight"
        >
          I build backend systems focused on automation, APIs and real-world data processing
        </motion.h1>

        <p className="text-gray-500 max-w-xl mb-8">
          Backend developer working with Python, building APIs, automation workflows and data processing systems for real-world applications
        </p>

        <a
          href="#contact"
          className="btn bg-black text-white dark:bg-white dark:text-black"
        >
          Let’s work together
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="container-custom py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">About me</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          I'm a backend developer working with Python, focused on building APIs, automation tools and data processing systems. My work involves handling real data, creating efficient workflows and developing backend solutions that are simple, reliable and built to scale. I've developed projects using FastAPI.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          What I do
        </h2>

        <div className="container-custom grid md:grid-cols-3 gap-6">

          <div className="card">
            <h3 className="font-semibold mb-2">API Development</h3>
            <p className="text-gray-500">
              Designing and building high-performance APIs with clean architecture and scalability in mind.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">Automation</h3>
            <p className="text-gray-500">
              Automating repetitive processes to save time, reduce errors, and increase efficiency.
            </p>
          </div>
           <div className="card max-w-sm w-full">
      <h3 className="font-semibold mb-2">Web Scraping</h3>
      <p className="text-gray-500">
        Collecting and transforming data into structured datasets.
      </p>
    </div>


        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container-custom py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo, i) => (
            <motion.a
              key={i}
              href={`/projects/${repo.name}`}
              whileHover={{ scale: 1.03 }}
              className="card"
            >
              <img
                src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                alt="preview"
                className="rounded-xl mb-4 border"
              />

              <h3 className="text-xl font-semibold mb-2">
                {repo.name}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                {repo.description || "Backend project focused on performance and scalability"}
              </p>

              <span className="text-xs text-gray-400">
                {repo.language || "Tech"}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* GITHUB ACTIVITY */}
      <section className="text-center py-20">
        <h2 className="text-2xl mb-6">GitHub Activity</h2>

        <img
          src="https://ghchart.rshah.org/LucasbnTosta"
          alt="GitHub chart"
          className="mx-auto"
        />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let’s build something impactful together
        </h2>

        <p className="text-gray-500 mb-8">
          I'm available for freelance work, backend projects, and new opportunities.
        </p>

        <a
          href="mailto:lucasbtosta@gmail.com"
          className="btn bg-black text-white dark:bg-white dark:text-black"
        >
          Contact me 🚀
        </a>

      </section>

    </main>
  );
}