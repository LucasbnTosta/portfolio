"use client";

import { useEffect, useState } from "react";

export default function ProjectPage({ params }: any) {
  const [repo, setRepo] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/LucasbnTosta/${params.name}`)
      .then(res => res.json())
      .then(data => setRepo(data));
  }, [params.name]);

  if (!repo) return <p>Carregando...</p>;

  return (
    <main className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">{repo.name}</h1>
      <p className="text-gray-400 mb-6">
        {repo.description || "Sem descrição"}
      </p>

      <a
        href={`/projects/${repo.name}`}
        target="_blank"
        className="border px-4 py-2 rounded-xl"
      >
        Ver no GitHub
      </a>
    </main>
  );
}