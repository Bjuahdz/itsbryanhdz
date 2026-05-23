import { projects } from '../../data/projects'
import { ProjectSpineGallery } from './ProjectSpineGallery'

type HomeProjectsProps = {
  id?: string
}

export function HomeProjects({ id = 'projects' }: HomeProjectsProps) {
  return (
    <section
      id={id}
      className="home-projects-section scroll-mt-8 border-b border-(--color-border) py-10 lg:py-14"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end lg:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
            Selected work
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
            Projects
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-(--color-text) lg:text-right">
          Practical builds with enough room to show the work before asking you to read about it.
        </p>
      </div>

      <ProjectSpineGallery projects={projects} />
    </section>
  )
}
