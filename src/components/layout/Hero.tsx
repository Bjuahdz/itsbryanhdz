import { ChevronDown } from 'lucide-react'
import { site } from '../../data/site'
import { SkillStrip } from '../sections/SkillStrip'
import TextType from '../react-bits/text/TextType/TextType'
import { AppLink } from '../ui/AppLink'
import { ThemeSealToggle } from '../ui/ThemeToggle'

type HeroProps = {
  isHomePage: boolean
  isPastHero: boolean
}

/**
 * Home hero plus hero-only theme seal (top-left stamp).
 * After the hero, the seal lives in the archive sidebar — see ArchiveLayout.
 */
export function Hero({ isHomePage, isPastHero }: HeroProps) {
  const { headerHero } = site
  const showHeroSeal = isHomePage && !isPastHero

  return (
    <>
      {isHomePage && (
        <section
          id="home-hero"
          className="home-hero"
          aria-label="Introduction"
        >
          {showHeroSeal && (
            <ThemeSealToggle className="home-hero__seal h-11 w-11 text-xs leading-none sm:h-12 sm:w-12 sm:text-sm" />
          )}

          <div className="home-hero__center">
            <div className="home-hero__intro mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
                {headerHero.eyebrow}
              </p>
              <h1 className="home-hero__name mt-5 font-serif text-4xl leading-[1.05] text-(--color-heading) sm:text-5xl lg:text-[3.5rem]">
                <TextType
                  text={site.name}
                  as="span"
                  loop={false}
                  showCursor
                  typingSpeed={42}
                  initialDelay={180}
                  className="home-hero__name-type"
                />
              </h1>
              <div className="home-hero__brief mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--color-text) sm:text-base">
                <TextType
                  text={[...site.briefPhrases]}
                  as="p"
                  loop
                  showCursor
                  typingSpeed={36}
                  deletingSpeed={24}
                  pauseDuration={2200}
                  className="home-hero__brief-type"
                />
              </div>
              <p className="home-hero__title mx-auto mt-5 max-w-2xl text-center text-xs font-semibold uppercase tracking-[0.14em] text-(--color-muted)">
                {site.title}
              </p>
            </div>
          </div>

          <div className="home-hero__bottom">
            <div className="home-hero__stack mx-auto w-full max-w-5xl px-4 sm:px-6">
              <p className="home-hero__stack-label text-center text-xs font-semibold uppercase tracking-[0.18em] text-(--color-muted)">
                {headerHero.skillsLabel}
              </p>
              <SkillStrip variant="hero" className="home-hero__skill-strip" />
            </div>

            <AppLink
              href="/#projects"
              className="home-hero__scroll"
              aria-label={headerHero.scrollAriaLabel}
            >
              <span>{headerHero.scrollLabel}</span>
              <ChevronDown className="home-hero__scroll-icon" aria-hidden />
            </AppLink>
          </div>
        </section>
      )}
    </>
  )
}
