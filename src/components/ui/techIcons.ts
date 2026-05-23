import { Bot, ChartNoAxesCombined, FileSpreadsheet, Landmark } from 'lucide-react'
import type { IconType } from 'react-icons'
import {
  SiAppwrite,
  SiCss,
  SiExpo,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMapbox,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiShopify,
  SiSharp,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const techIcons: Record<string, IconType> = {
  Appwrite: SiAppwrite,
  CSS: SiCss,
  Expo: SiExpo,
  Git: SiGit,
  HTML: SiHtml5,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  Linux: SiLinux,
  Mapbox: SiMapbox,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'OpenAI API': SiOpenai,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  PyTorch: SiPytorch,
  React: SiReact,
  'React Native': SiReact,
  Shopify: SiShopify,
  SQL: SiSqlite,
  'Tailwind CSS': SiTailwindcss,
  TypeScript: SiTypescript,
  'C#': SiSharp,
}

export const customTechIcons: Record<string, IconType> = {
  Automation: Bot,
  Matplotlib: ChartNoAxesCombined,
  'MS Office': FileSpreadsheet,
  Plaid: Landmark,
}

export function hasTechIcon(name: string) {
  return name in techIcons || name in customTechIcons
}
