/** Home page sections in top-to-bottom document order. */
export const HOME_SCROLL_SECTIONS = [
  'projects',
  'experience',
  'education',
  'about',
  'contact',
] as const

export type HomeScrollSectionId = (typeof HOME_SCROLL_SECTIONS)[number]

export type SectionScrollMetric = {
  id: HomeScrollSectionId
  offsetTop: number
  offsetBottom: number
}

export function isNearPageTop(scrollY: number, threshold = 48) {
  return scrollY <= threshold
}

/** How much of a section intersects the viewport reading band (document coordinates). */
export function getSectionVisibleHeight(
  section: Pick<SectionScrollMetric, 'offsetTop' | 'offsetBottom'>,
  viewportTop: number,
  viewportBottom: number,
) {
  const visibleTop = Math.max(section.offsetTop, viewportTop)
  const visibleBottom = Math.min(section.offsetBottom, viewportBottom)
  return Math.max(0, visibleBottom - visibleTop)
}

/** Viewport anchor — slightly above center so short sections register reliably. */
export function getScrollAnchorY(viewportTop: number, viewportBottom: number, ratio = 0.38) {
  return viewportTop + (viewportBottom - viewportTop) * ratio
}

/**
 * Active section = the one containing the scroll anchor, else the nearest by center.
 * Predictable for both tall and short sections.
 */
export function resolveActiveScrollSection(
  sections: ReadonlyArray<SectionScrollMetric>,
  options: {
    scrollY: number
    viewportTop: number
    viewportBottom: number
    atPageBottom: boolean
  },
): HomeScrollSectionId {
  if (options.atPageBottom) {
    return 'contact'
  }

  if (isNearPageTop(options.scrollY) || sections.length === 0) {
    return HOME_SCROLL_SECTIONS[0]
  }

  const anchorY = getScrollAnchorY(options.viewportTop, options.viewportBottom)

  for (const section of sections) {
    if (section.offsetTop <= anchorY && anchorY < section.offsetBottom) {
      return section.id
    }
  }

  let active = sections[0]
  let nearestCenterDistance = Number.POSITIVE_INFINITY

  for (const section of sections) {
    const sectionCenter = (section.offsetTop + section.offsetBottom) / 2
    const centerDistance = Math.abs(sectionCenter - anchorY)

    if (centerDistance < nearestCenterDistance) {
      nearestCenterDistance = centerDistance
      active = section
    }
  }

  return active.id
}

export function isAtPageBottom(scrollY: number, innerHeight: number, scrollHeight: number, threshold = 48) {
  return scrollY + innerHeight >= scrollHeight - threshold
}

export function getSectionScrollMetric(element: HTMLElement): SectionScrollMetric | null {
  const id = element.id as HomeScrollSectionId
  if (!(HOME_SCROLL_SECTIONS as readonly string[]).includes(id)) return null

  const rect = element.getBoundingClientRect()
  if (rect.height === 0) return null

  const offsetTop = rect.top + window.scrollY
  return {
    id,
    offsetTop,
    offsetBottom: offsetTop + rect.height,
  }
}
