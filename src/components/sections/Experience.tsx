import { experienceEvents } from '../../data/experience'
import { ExperienceRichText } from '../ui/ExperienceRichText'
import ShinyText from '../react-bits/text/ShinyText/ShinyText'

type ExperienceProps = {
  id?: string
}

function splitExperienceTitle(title: string) {
  const separator = title.indexOf(' - ')
  if (separator === -1) {
    return { role: title, company: null as string | null }
  }

  return {
    role: title.slice(0, separator),
    company: title.slice(separator + 3),
  }
}

function formatTimelineIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}

function CompanyName({
  company,
  highlight,
  shineDelay = 0,
}: {
  company: string
  highlight?: string
  shineDelay?: number
}) {
  if (!highlight || !company.includes(highlight)) {
    return <>{company}</>
  }

  const prefix = company.slice(0, company.indexOf(highlight))
  const suffix = company.slice(company.indexOf(highlight) + highlight.length)

  return (
    <>
      {prefix}
      <ShinyText
        text={highlight}
        useThemeColors
        speed={3.6}
        delay={shineDelay}
        spread={95}
        yoyo
        className="font-semibold"
      />
      {suffix}
    </>
  )
}

export function Experience({ id = 'experience' }: ExperienceProps) {
  return (
    <section id={id} className="scroll-mt-8 border-b border-(--color-border) py-10 lg:py-14">
      <div className="experience-section__intro">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
          Career timeline
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
          Experience
        </h2>
      </div>

      <div className="experience-timeline-shell">
        <ol className="experience-timeline" aria-label="Work experience timeline">
          {experienceEvents.map((event, index) => {
            const { role, company } = splitExperienceTitle(event.title)

            return (
              <li key={event.id} className="experience-timeline__entry">
                <div className="experience-timeline__identity">
                  <span className="experience-timeline__year">{event.date}</span>
                  <span className="experience-timeline__index" aria-hidden>
                    {formatTimelineIndex(index)}
                  </span>
                  <p className="experience-timeline__role">{role}</p>
                  {company ? (
                    <h3 className="experience-timeline__company">
                      <CompanyName
                        company={company}
                        highlight={event.titleHighlight}
                        shineDelay={index * 0.35}
                      />
                    </h3>
                  ) : (
                    <h3 className="experience-timeline__company">{role}</h3>
                  )}
                </div>

                <article className="experience-timeline__story">
                  <p
                    className="experience-timeline__meta"
                    aria-label={`${event.date}, ${event.label}`}
                  >
                    <span>{event.label}</span>
                  </p>
                  <p className="experience-timeline__summary">
                    <ExperienceRichText
                      text={event.summary}
                      highlights={event.summaryHighlights}
                      shineDelay={index * 0.2}
                    />
                  </p>

                  <ul className="experience-timeline__details">
                    {event.details.map((detail) => (
                      <li key={detail.text}>
                        <ExperienceRichText
                          text={detail.text}
                          highlights={detail.highlight ? [detail.highlight] : []}
                          shineSpeed={3.4}
                        />
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
