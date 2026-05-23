import { Check, Copy, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { site } from '../../data/site'

type ContactProps = {
  id?: string
}

export function Contact({ id = 'contact' }: ContactProps) {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: '',
    subject: '',
  })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      const emailField = document.createElement('textarea')
      emailField.value = site.email
      emailField.setAttribute('readonly', '')
      emailField.style.position = 'fixed'
      emailField.style.opacity = '0'
      document.body.appendChild(emailField)
      emailField.select()
      document.execCommand('copy')
      document.body.removeChild(emailField)
    }

    setHasCopiedEmail(true)
    window.setTimeout(() => setHasCopiedEmail(false), 1800)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      formData.subject || `Portfolio message from ${formData.name || 'visitor'}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Subject: ${formData.subject || 'Portfolio message'}`,
        '',
        formData.message,
      ].join('\n'),
    )

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id={id} className="scroll-mt-8 py-6 lg:py-10">
      <div className="grid gap-4 lg:grid-cols-[minmax(230px,0.55fr)_1fr] lg:items-start lg:gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-accent)">
            Contact
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-(--color-heading) sm:text-4xl lg:mt-3">
            Get in touch
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-(--color-text)">
            Send a short note or copy my email for a direct message.
          </p>
          <div className="mt-4 max-w-sm border-y border-(--color-border)/55 py-3">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-(--color-muted)">
                  Direct email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block truncate text-sm font-semibold text-(--color-heading) transition hover:text-(--color-accent)"
                >
                  {site.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex shrink-0 items-center gap-2 self-start text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-(--color-muted) transition hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:self-center"
                aria-label="Copy email address"
              >
                {hasCopiedEmail ? (
                  <Check className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden />
                )}
                {hasCopiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 border-t border-(--color-border) pt-4 lg:border-t-0 lg:pt-0">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-muted)">
                Name
              </span>
              <input
                required
                value={formData.name}
                onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                className="border-0 border-b border-(--color-border) bg-transparent px-0 py-2 text-sm text-(--color-heading) outline-none placeholder:text-(--color-muted) focus:border-(--color-accent)"
                placeholder="Your name"
                type="text"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-muted)">
                Email
              </span>
              <input
                required
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                className="border-0 border-b border-(--color-border) bg-transparent px-0 py-2 text-sm text-(--color-heading) outline-none placeholder:text-(--color-muted) focus:border-(--color-accent)"
                placeholder="you@example.com"
                type="email"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-muted)">
              Subject
            </span>
            <input
              required
              value={formData.subject}
              onChange={(event) => setFormData((current) => ({ ...current, subject: event.target.value }))}
              className="border-0 border-b border-(--color-border) bg-transparent px-0 py-2 text-sm text-(--color-heading) outline-none placeholder:text-(--color-muted) focus:border-(--color-accent)"
              placeholder="Opportunity, project, or question"
              type="text"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-(--color-muted)">
              Message
            </span>
            <textarea
              required
              value={formData.message}
              onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
              className="min-h-24 resize-y border-0 border-b border-(--color-border) bg-transparent px-0 py-2 text-sm text-(--color-heading) outline-none placeholder:text-(--color-muted) focus:border-(--color-accent)"
              placeholder="What would you like to talk about?"
            />
          </label>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 bg-(--color-accent) px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-(--color-bg) transition hover:bg-(--color-accent-hover) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:w-auto sm:min-w-52"
            >
              Send message
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
