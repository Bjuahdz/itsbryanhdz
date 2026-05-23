import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'portfolio-theme'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem(storageKey)
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useThemeMode() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  return {
    isDark,
    theme,
    toggleTheme: () => setTheme(isDark ? 'light' : 'dark'),
  }
}
