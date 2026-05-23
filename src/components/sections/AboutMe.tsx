import { site } from '../../data/site'

type AboutMeProps = {
  id?: string
}

export function AboutMe({ id = 'about' }: AboutMeProps) {
  const { aboutHero } = site

  return (
    <section id={id} className="scroll-mt-8 border-b border-(--color-border) py-10 lg:py-12">
      <div className="about-me">
        <div className="about-me__copy">
          <span className="about-me__rail" aria-hidden />
          <div className="about-me__text">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
              {aboutHero.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
              {aboutHero.title}
            </h2>
            <div className="about-me__prose mt-5">
              <p className="about-me__lede text-base leading-7 text-(--color-heading) sm:text-lg">
                {site.tagline}
              </p>
              <p className="about-me__body text-sm leading-7 text-(--color-text) sm:text-[0.95rem]">
                {site.bio}
              </p>
            </div>
          </div>
        </div>

        <figure className="about-me__portrait">
          <div className="about-me__portrait-card">
            <img
              src={site.avatarUrl}
              alt={`${site.name} graduation portrait`}
              className="about-me__photo"
              width={320}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
