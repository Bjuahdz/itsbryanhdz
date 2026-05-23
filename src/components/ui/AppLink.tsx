import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { APP_NAVIGATE_HASH_EVENT, scrollToHash } from '../../utils/scrollToHash'

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  href: string
}

export function AppLink({ children, href, onClick, ...props }: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      props.target
    ) {
      return
    }

    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) return

    event.preventDefault()
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
    window.dispatchEvent(new Event('pushstate'))

    if (url.hash) {
      if (!scrollToHash(url.hash)) {
        window.dispatchEvent(new Event(APP_NAVIGATE_HASH_EVENT))
      }
      return
    }

    window.scrollTo({ top: 0 })
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
