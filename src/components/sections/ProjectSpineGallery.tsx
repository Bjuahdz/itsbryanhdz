import { useCallback, useEffect, useId, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import type { Project } from '../../types'
import { getSkillBrandColor } from '../../data/skillBrandColors'
import { AppLink } from '../ui/AppLink'
import { GitHubIcon } from '../ui/BrandIcons'
import { TechIcon } from '../ui/TechIcon'
import { hasTechIcon } from '../ui/techIcons'
import './ProjectSpineGallery.css'

type ProjectSpineGalleryProps = {
  projects: Project[]
}

const MAX_HOME_PREVIEW_PROJECTS = 8

function isVideoMedia(url?: string) {
  return /\.(mp4|mov|webm|ogg)$/i.test(url ?? '')
}

function ProjectMedia({ project }: { project: Project }) {
  const mediaUrl = project.videoUrl ?? project.imageUrl

  if (!mediaUrl) {
    return <div className="project-spine-gallery__media project-spine-gallery__media--empty" />
  }

  if (isVideoMedia(mediaUrl)) {
    return (
      <video
        className="project-spine-gallery__media"
        src={mediaUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-label={`${project.title} project preview`}
      />
    )
  }

  return (
    <img
      className="project-spine-gallery__media"
      src={mediaUrl}
      alt={`${project.title} project preview`}
      loading="lazy"
    />
  )
}

function ProjectTechDock({ project }: { project: Project }) {
  const iconTech = project.tech.filter(hasTechIcon)

  return (
    <ul className="project-spine-gallery__tech-dock" aria-label={`${project.title} technology stack`}>
      {iconTech.map((item) => (
        <li
          key={item}
          className="project-spine-gallery__tech-item"
          style={{ '--skill-brand': getSkillBrandColor(item) } as CSSProperties}
          tabIndex={0}
        >
          <TechIcon className="project-spine-gallery__tech-icon" name={item} />
          <span className="project-spine-gallery__tech-tooltip">{item}</span>
        </li>
      ))}
      {project.repoUrl ? (
        <li className="project-spine-gallery__tech-item project-spine-gallery__tech-item--github">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            style={{ '--skill-brand': '#f5f5f5' } as CSSProperties}
          >
            <GitHubIcon className="project-spine-gallery__tech-icon" />
            <span className="project-spine-gallery__tech-tooltip">GitHub</span>
          </a>
        </li>
      ) : null}
    </ul>
  )
}

function ProjectExpandedPanel({ project }: { project: Project }) {
  const layout = project.expandedLayout ?? 'wide'

  return (
    <div
      className={`project-spine-gallery__expanded project-spine-gallery__expanded--${layout}`}
    >
      <div className="project-spine-gallery__preview">
        {layout === 'mobile' ? (
          <div className="project-spine-gallery__mobile-showcase">
            <h3 className="project-spine-gallery__title">{project.title}</h3>
            <div className="project-spine-gallery__phone-frame" aria-hidden={!project.imageUrl}>
              <div className="project-spine-gallery__phone-screen">
                {project.imageUrl ? (
                  <img
                    className="project-spine-gallery__phone-image"
                    src={project.imageUrl}
                    alt={`${project.title} app screen`}
                    loading="lazy"
                  />
                ) : null}
              </div>
              <img
                className="project-spine-gallery__phone-bezel"
                src="/images/phone_frame.png"
                alt=""
                aria-hidden
                draggable={false}
              />
            </div>
            <ProjectTechDock project={project} />
          </div>
        ) : (
          <>
            <ProjectMedia project={project} />
            <div className="project-spine-gallery__wide-content">
              <h3 className="project-spine-gallery__title">{project.title}</h3>
              <ProjectTechDock project={project} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function ProjectSpineGallery({ projects }: ProjectSpineGalleryProps) {
  const galleryId = useId()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null)
  const closeTimerRef = useRef<number | null>(null)
  const previewProjects = projects.slice(0, MAX_HOME_PREVIEW_PROJECTS)

  const cancelCloseTimer = useCallback(() => {
    if (closeTimerRef.current === null) return
    window.clearTimeout(closeTimerRef.current)
    closeTimerRef.current = null
  }, [])

  const activateDesktop = useCallback((id: string) => {
    cancelCloseTimer()
    setActiveId(id)
  }, [cancelCloseTimer])

  const clearDesktop = useCallback(() => {
    cancelCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setActiveId(null)
      closeTimerRef.current = null
    }, 140)
  }, [cancelCloseTimer])

  const toggleMobile = useCallback((id: string) => {
    setMobileOpenId((current) => (current === id ? null : id))
  }, [])

  useEffect(() => cancelCloseTimer, [cancelCloseTimer])

  if (previewProjects.length === 0) return null

  return (
    <div className="project-spine-gallery mt-8">
      <div
        className={`project-spine-gallery--desktop${
          activeId ? '' : ' project-spine-gallery--desktop--idle'
        }`}
        role="group"
        aria-label="Project gallery"
        onMouseLeave={clearDesktop}
      >
        <div className="project-spine-gallery__desktop-tracks">
          {previewProjects.map((project, index) => {
            const isActive = activeId === project.id
            const tabId = `${galleryId}-tab-${project.id}`
            const panelId = `${galleryId}-panel-${project.id}`

            return (
              <article
                key={project.id}
                data-project={project.id}
                className={`project-spine-gallery__desktop-item${
                  isActive ? ' project-spine-gallery__desktop-item--active' : ''
                }`}
                onMouseEnter={() => activateDesktop(project.id)}
                onPointerEnter={() => activateDesktop(project.id)}
              >
                <button
                  type="button"
                  id={tabId}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive || (!activeId && index === 0) ? 0 : -1}
                  className="project-spine-gallery__desktop-trigger"
                  aria-label={`${project.title}, ${project.category}`}
                  onFocus={() => activateDesktop(project.id)}
                  onClick={() => activateDesktop(project.id)}
                >
                  <span className="project-spine-gallery__desktop-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-spine-gallery__desktop-spine-title">
                    {project.title}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="tabpanel"
                  aria-labelledby={tabId}
                  aria-hidden={!isActive}
                  hidden={!isActive}
                  className="project-spine-gallery__desktop-panel"
                >
                  <ProjectExpandedPanel project={project} />
                </div>
              </article>
            )
          })}
        </div>

        <AppLink
          href="/projects"
          className="project-spine-gallery__desktop-cta"
          aria-label="View all projects"
        >
          <span className="project-spine-gallery__desktop-cta-index" aria-hidden>
            +
          </span>
          <span className="project-spine-gallery__desktop-cta-label">View all projects</span>
          <ArrowUpRight className="project-spine-gallery__desktop-cta-icon" aria-hidden />
        </AppLink>
      </div>

      <div className="project-spine-gallery--mobile" aria-label="Project folders">
        {previewProjects.map((project, index) => {
          const isOpen = mobileOpenId === project.id
          const panelId = `${galleryId}-mobile-${project.id}`

          return (
            <article
              key={project.id}
              data-project={project.id}
              className={`project-spine-gallery__mobile-item${
                isOpen ? ' project-spine-gallery__mobile-item--open' : ''
              }`}
            >
              <button
                type="button"
                className="project-spine-gallery__mobile-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={`${project.title}, ${project.category}`}
                onClick={() => toggleMobile(project.id)}
              >
                <span className="project-spine-gallery__mobile-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="project-spine-gallery__mobile-spine-title">
                    {project.title}
                  </span>
                  <span className="project-spine-gallery__mobile-meta">{project.category}</span>
                </span>
                <ChevronDown className="project-spine-gallery__mobile-chevron" aria-hidden />
              </button>
              <div
                id={panelId}
                className="project-spine-gallery__mobile-panel"
                aria-hidden={!isOpen}
              >
                <div className="project-spine-gallery__mobile-panel-inner">
                  <div className="project-spine-gallery__mobile-panel-content">
                    <ProjectExpandedPanel project={project} />
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        <AppLink
          href="/projects"
          className="project-spine-gallery__mobile-cta"
          aria-label="View all projects"
        >
          <span>View all projects</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </AppLink>
      </div>
    </div>
  )
}
