import { ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { GitHubIcon } from '../ui/BrandIcons'

type ProjectsProps = {
  id?: string
}

function isUpcomingProject(project: Project) {
  return (
    project.year === 'Next' ||
    /upcoming|in development/i.test(project.status)
  )
}

export function Projects({ id = 'projects' }: ProjectsProps) {
  const [featuredProject, ...rest] = projects
  const completedProjects = rest.filter((project) => !isUpcomingProject(project))
  const upcomingProjects = rest.filter(isUpcomingProject)

  return (
    <section id={id} className="scroll-mt-8 border-b border-(--color-border) py-10 lg:py-14">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
          Selected Work
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
          Technical dossier
        </h2>
      </div>

      {featuredProject ? <FeaturedProject project={featuredProject} /> : null}

      {completedProjects.length > 0 ? (
        <div className="mt-6 border-t border-(--color-border) lg:mt-8">
          <p className="py-4 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
            More builds
          </p>
          <div className="grid gap-px border border-(--color-border) bg-(--color-border) sm:grid-cols-2">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : null}

      {upcomingProjects.length > 0 ? (
        <div className="mt-6 border-t border-(--color-border) lg:mt-8">
          <p className="py-4 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
            Upcoming builds
          </p>
          <div className="grid gap-px border border-(--color-border) bg-(--color-border) sm:grid-cols-2">
            {upcomingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="mt-6 scroll-mt-8 border border-(--color-border) bg-(--color-bg) lg:mt-8"
    >
      <div className="grid gap-px bg-(--color-border) lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="bg-(--color-bg) p-4 sm:p-5 lg:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-2xl leading-none text-(--color-heading) sm:text-3xl">
              {project.year}
            </span>
            <span className="border border-(--color-accent) px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-(--color-accent)">
              Featured build
            </span>
          </div>
          <h3 className="mt-5 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-(--color-text)">
            {project.description}
          </p>

          <ul className="mt-5 grid gap-2 text-sm text-(--color-text)">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="border-l border-(--color-accent) pl-3">
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <aside className="bg-(--color-surface) p-4 sm:p-5 lg:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-muted)">
            {project.category}
          </p>
          <p className="mt-1 text-sm font-semibold text-(--color-heading)">
            {project.status}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="border border-(--color-border) bg-(--color-bg) px-2 py-1 text-xs text-(--color-text)"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 border border-(--color-border) px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-heading) transition hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
              >
                Website
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 border border-(--color-border) px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-heading) transition hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
              >
                Source
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </aside>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={project.id} className="scroll-mt-8 bg-(--color-bg) p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-serif text-2xl leading-none text-(--color-heading)">
          {project.year}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-accent)">
          {project.status}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-tight text-(--color-heading)">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-(--color-text)">{project.overview}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="border border-(--color-border) px-2 py-1 text-xs text-(--color-text)"
          >
            {item}
          </span>
        ))}
      </div>
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-heading) transition hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
        >
          Source
          <GitHubIcon className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </article>
  )
}
