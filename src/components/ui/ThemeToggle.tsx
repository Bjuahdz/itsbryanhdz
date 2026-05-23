import { Moon, Sun } from 'lucide-react'
import { site } from '../../data/site'
import { useThemeMode } from '../../hooks/useThemeMode'

export function ThemeSealToggle({ className = '' }: { className?: string }) {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <button
      type="button"
      className={`site-theme-toggle site-brand-mark relative flex shrink-0 items-center justify-center border border-(--color-heading) font-serif font-semibold text-(--color-heading) transition hover:bg-(--color-heading) hover:text-(--color-bg) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span aria-hidden>{site.brandMonogram}</span>
      <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center bg-(--color-bg) text-(--color-accent)">
        {isDark ? (
          <Sun className="h-2.5 w-2.5" aria-hidden />
        ) : (
          <Moon className="h-2.5 w-2.5" aria-hidden />
        )}
      </span>
    </button>
  )
}
