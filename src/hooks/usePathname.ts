import { useEffect, useState } from 'react'

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', updatePathname)
    window.addEventListener('pushstate', updatePathname)

    return () => {
      window.removeEventListener('popstate', updatePathname)
      window.removeEventListener('pushstate', updatePathname)
    }
  }, [])

  return pathname
}
