import { certificates, education } from '../../data/profile'

type EducationProps = {
  id?: string
}

export function Education({ id = 'education' }: EducationProps) {
  return (
    <section id={id} className="scroll-mt-8 border-b border-(--color-border) pb-8 lg:pb-10">
      <div className="mb-5 lg:mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
          Background
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
          Education
        </h2>
      </div>

      <div
        className={`grid gap-px border border-(--color-border) bg-(--color-border)${
          certificates.length > 0
            ? ' lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.8fr)]'
            : ''
        }`}
      >
        <div className="bg-(--color-bg) p-4 sm:p-5 lg:p-6">
          <ol className="grid gap-4">
            {education.map((item) => (
              <li key={item.id} className="education-entry">
                <div className="education-entry__heading">
                  <h3 className="education-entry__title">{item.title}</h3>
                  <span className="education-entry__rule" aria-hidden />
                  <p className="education-entry__date">{item.date}</p>
                </div>
                <div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-muted)">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-(--color-text)">{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {certificates.length > 0 ? (
          <aside className="bg-(--color-surface) p-4 sm:p-5 lg:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--color-accent)">
              Certificates
            </p>
            <div className="mt-5 grid gap-4">
              {certificates.map((item) => (
                <article key={item.id}>
                  <h3 className="text-lg font-semibold leading-tight text-(--color-heading)">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-muted)">
                    {item.status}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-(--color-text)">{item.summary}</p>
                </article>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  )
}
