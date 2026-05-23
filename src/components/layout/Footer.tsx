import { site } from '../../data/site'
import { socials } from '../../data/site'
import { AppLink } from '../ui/AppLink'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../ui/BrandIcons'

function SocialIcon({ icon, className }: { icon: string; className: string }) {
  if (icon === 'github') return <GitHubIcon className={className} />
  if (icon === 'linkedin') return <LinkedInIcon className={className} />
  if (icon === 'instagram') return <InstagramIcon className={className} />

  return null
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--color-border)">
      <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-(--color-muted)">
          &copy; {year} {site.name}
        </p>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-muted)">
            <li>
              <AppLink href="/projects" className="inline-flex transition hover:text-(--color-accent)">
                Projects
              </AppLink>
            </li>
            <li>
              <AppLink href="/blog" className="inline-flex transition hover:text-(--color-accent)">
                Blog
              </AppLink>
            </li>
            {socials.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="inline-flex text-(--color-muted) transition hover:text-(--color-accent)"
                >
                  <SocialIcon icon={link.icon} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
