import { notFound } from "next/navigation";
import { projectData } from "@/app/data/projects";

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

  const custom = projectData[params.repo];

  return (
    <div className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

      {/* TITLE */}
      <h1 className="text-5xl font-bold mb-4">
        {custom?.title || repo.name}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-lg max-w-2xl mb-10">
        {custom?.description || repo.description}
      </p>

      {/* STACK */}
      <div className="flex gap-3 flex-wrap mb-10">
        {(custom?.stack || [repo.language]).map((tech: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* STATS */}
      <div className="flex gap-6 mb-12">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>

      {/* BUTTON */}
      <a
        href={repo.html_url}
        target="_blank"
        className="inline-block bg-black text-white px-8 py-4 rounded-xl"
      >
        View on GitHub →
      </a>

    </div>
  );
}