'use client';

import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

interface Project {
  title: string;
  url: string;
  description: string | null;
  year: number;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await octokit.repos.listForUser({
          username: 'Paavalan08',
        });
        const repos: Project[] = response.data.map((repo) => ({
          title: repo.name,
          url: repo.html_url,
          description: repo.description,
          year: repo.created_at ? new Date(repo.created_at).getFullYear() : 0,
        }));
        setProjects(repos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }

    fetchRepositories();
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">{project.title}</span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">{project.year}</span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
