export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  year: string
  category: string
  status: string
  overview: string
  keywords: string[]
  outcomes: string[]
  liveUrl?: string
  websiteUrl?: string
  repoUrl?: string
  imageUrl?: string
  videoUrl?: string
  expandedLayout?: 'mobile' | 'wide'
  /** Override auto-detected footer icon contrast on backdrop previews */
  footerIconTone?: 'on-light' | 'on-dark'
}

export type ExperienceDetail = {
  text: string
  highlight?: string
}

export type ExperienceEvent = {
  id: string
  date: string
  label: string
  title: string
  titleHighlight?: string
  summary: string
  summaryHighlights?: string[]
  details: ExperienceDetail[]
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram'
}
