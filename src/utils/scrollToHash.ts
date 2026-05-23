/** Scroll to a hash target if it exists in the document. */
export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = hash.replace(/^#/, '')
  if (!id) return false

  const target = document.getElementById(id)
  if (!target) return false

  if (typeof target.scrollIntoView === 'function') {
    target.scrollIntoView({ behavior, block: 'start' })
  } else {
    const top =
      window.scrollY + target.getBoundingClientRect().top - parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop || '0',
      )
    window.scrollTo({ top, behavior })
  }

  return true
}

/** Retry after layout — needed when navigation swaps page content first. */
export function scheduleScrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  let attempts = 0
  const maxAttempts = 12

  const tryScroll = () => {
    if (scrollToHash(hash, behavior)) return
    attempts += 1
    if (attempts < maxAttempts) {
      requestAnimationFrame(tryScroll)
    }
  }

  requestAnimationFrame(tryScroll)
}

export const APP_NAVIGATE_HASH_EVENT = 'app:navigate-hash'
