import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { blogPosts } from '../../data/blog'

type BlogProps = {
  id?: string
}

function formatPostDate(isoDate: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(isoDate))
}

export function Blog({ id = 'blog' }: BlogProps) {
  const [openPostId, setOpenPostId] = useState(blogPosts[0]?.id ?? '')

  return (
    <section id={id} className="library-page scroll-mt-8 border-b border-(--color-border) py-10 lg:py-14">
      <div className="library-page__intro">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
            Blog
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl">
            Notes and point of view
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-(--color-text)">
            Project notes, learning records, and point-of-view drafts organized like a small working library.
          </p>
        </div>
        <aside className="library-page__ledger" aria-label="Blog index">
          <span>{blogPosts.length.toString().padStart(2, '0')} entries</span>
          <span>{blogPosts.reduce((total, post) => total + post.readMinutes, 0)} min total</span>
          <span>Folder notes</span>
        </aside>
      </div>

      <div className="library-folders mt-8" aria-label="Blog folders">
        {blogPosts.map((post, index) => {
          const isOpen = openPostId === post.id
          const panelId = `${post.id}-notes`

          return (
            <article
              key={post.id}
              className={`library-folder${isOpen ? ' library-folder--open' : ''}`}
            >
              <button
                type="button"
                className="library-folder__tab"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenPostId((current) => (current === post.id ? '' : post.id))}
              >
                <span className="library-folder__number">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="library-folder__title-wrap">
                  <span className="library-folder__meta">
                    {post.topic} / {formatPostDate(post.date)} / {post.readMinutes} min read
                  </span>
                  <span className="library-folder__title">{post.title}</span>
                </span>
                <ChevronDown className="library-folder__chevron" aria-hidden />
              </button>

              <div
                id={panelId}
                className="library-folder__panel"
                aria-hidden={!isOpen}
              >
                <div className="library-folder__panel-inner">
                  <p className="library-folder__excerpt">{post.excerpt}</p>
                  <dl className="library-folder__notes">
                    <div>
                      <dt>Premise</dt>
                      <dd>{post.notes.premise}</dd>
                    </div>
                    <div>
                      <dt>Process</dt>
                      <dd>{post.notes.process}</dd>
                    </div>
                    <div>
                      <dt>Point of view</dt>
                      <dd>{post.notes.takeaway}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
