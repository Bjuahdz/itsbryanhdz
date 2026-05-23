import { customTechIcons, techIcons } from './techIcons'

type TechIconProps = {
  className?: string
  name: string
}

export function TechIcon({ className, name }: TechIconProps) {
  const Icon = techIcons[name] ?? customTechIcons[name]

  if (Icon) return <Icon className={className} aria-hidden />

  return null
}
