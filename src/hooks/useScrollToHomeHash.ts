import { useEffect } from 'react'
import { scheduleScrollToHash, scrollToHash, APP_NAVIGATE_HASH_EVENT } from '../utils/scrollToHash'

/** After routing to the home page, scroll to the URL hash once sections mount. */
export function useScrollToHomeHash(isHome: boolean) {
  useEffect(() => {
    if (!isHome) return

    const scrollIfNeeded = () => {
      const hash = window.location.hash
      if (!hash) return
      if (!scrollToHash(hash, 'auto')) {
        scheduleScrollToHash(hash)
      }
    }

    scrollIfNeeded()
    window.addEventListener('hashchange', scrollIfNeeded)
    window.addEventListener(APP_NAVIGATE_HASH_EVENT, scrollIfNeeded)

    return () => {
      window.removeEventListener('hashchange', scrollIfNeeded)
      window.removeEventListener(APP_NAVIGATE_HASH_EVENT, scrollIfNeeded)
    }
  }, [isHome])
}
