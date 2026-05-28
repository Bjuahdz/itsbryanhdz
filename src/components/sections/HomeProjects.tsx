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
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
          Selected work
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
          Projects
        </h2>
      </div>

      <ProjectSpineGallery projects={projects} />
    </section>
  )
}
