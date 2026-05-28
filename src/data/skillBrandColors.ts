/** Brand colors for skill icon hover glows (Simple Icons palette). */
export const SKILL_BRAND_COLORS: Record<string, string> = {
  'C#': '#512bd4',
  Appwrite: '#f02e65',
  Automation: '#7a1f22',
  CSS: '#1572b6',
  Expo: '#000020',
  Figma: '#f24e1e',
  Git: '#f05032',
  HTML: '#e34f26',
  Java: '#ed8b00',
  JavaScript: '#f7df1e',
  Linux: '#fcc624',
  Mapbox: '#000000',
  Matplotlib: '#11557c',
  'MS Office': '#d83b01',
  'Next.js': '#404040',
  'Node.js': '#339933',
  Plaid: '#00d395',
  PostgreSQL: '#336791',
  PowerPoint: '#b7472a',
  Python: '#3776ab',
  React: '#61dafb',
  SQL: '#003b57',
  Shopify: '#96bf48',
  'Tailwind CSS': '#06b6d4',
  TypeScript: '#3178c6',
}

export function getSkillBrandColor(skill: string, fallback = '#7a1f22') {
  return SKILL_BRAND_COLORS[skill] ?? fallback
}
