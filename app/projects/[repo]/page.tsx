import { notFound } from "next/navigation";
import { motion } from "framer-motion";

async function getRepo(repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/LucasbnTosta/${repo}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function ProjectPage({ params }: any) {
  const repo = await getRepo(params.repo);

  if (!repo) return notFound();

  return (
    <div className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

      {/* HERO */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">
          {repo.name}
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl">
          {repo.description || "Backend project focused on building reliable and scalable systems."}
        </p>
      </div>

      {/* STATS */}
      <div className="flex gap-6 mb-12 flex-wrap">
        <div className="card px-4 py-2">
          ⭐ {repo.stargazers_count} Stars
        </div>

        <div className="card px-4 py-2">
          🍴 {repo.forks_count} Forks
        </div>

        <div className="card px-4 py-2">
          🧠 {repo.language || "Tech"}
        </div>
      </div>

      {/* ABOUT PROJECT */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          About this project
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          This project focuses on backend development using modern tools and best practices. It involves designing APIs, handling data efficiently and creating systems that are reliable and easy to maintain. The goal is to build solutions that solve practical problems and can scale as needed.
        </p>
      </div>

      {/* TECH STACK */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Technologies
        </h2>

        <div className="flex gap-3 flex-wrap">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            {repo.language || "Backend"}
          </span>

          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            API
          </span>

          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Automation
          </span>

          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Data Processing
          </span>
        </div>
      </div>

      {/* ACTION */}
      <div className="text-center">
        <a
          href={repo.html_url}
          target="_blank"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition"
        >
          View project on GitHub →
        </a>
      </div>

    </div>
  );
}