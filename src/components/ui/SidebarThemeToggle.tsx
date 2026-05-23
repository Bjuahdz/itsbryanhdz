import { Moon, Sun } from 'lucide-react'
import { useThemeMode } from '../../hooks/useThemeMode'

type SidebarThemeToggleProps = {
  className?: string
}

export function SidebarThemeToggle({ className = '' }: SidebarThemeToggleProps) {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <button
      type="button"
      className={`sidebar-utility-btn sidebar-theme-toggle ${className}`.trim()}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-3.5 w-3.5" aria-hidden /> : <Moon className="h-3.5 w-3.5" aria-hidden />}
    </button>
  )
}
