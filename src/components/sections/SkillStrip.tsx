import type { CSSProperties } from 'react'
import { site } from '../../data/site'
import { getSkillBrandColor } from '../../data/skillBrandColors'
import { TechIcon } from '../ui/TechIcon'

type SkillStripProps = {
  className?: string
  variant?: 'default' | 'hero'
}

export function SkillStrip({ className, variant = 'default' }: SkillStripProps) {
  const rootClassName = [
    'skill-strip-static',
    variant === 'hero' ? 'skill-strip-static--hero' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClassName} aria-label="Technology stack">
      {site.skillGroups.map((group) => (
        <section key={group.label} className="skill-strip-static__group">
          <p>{group.label}</p>
          <ul>
            {group.items.map((skill) => (
              <li
                key={skill}
                tabIndex={0}
                aria-label={skill}
                style={{ '--skill-brand': getSkillBrandColor(skill) } as CSSProperties}
              >
                <TechIcon name={skill} className="skill-strip-static__icon" />
                <span className="skill-strip-static__tooltip" aria-hidden="true">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
