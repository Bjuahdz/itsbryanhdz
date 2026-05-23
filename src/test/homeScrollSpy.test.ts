import { describe, expect, it } from 'vitest'
import {
  getSectionScrollMetric,
  getSectionVisibleHeight,
  isAtPageBottom,
  isNearPageTop,
  resolveActiveScrollSection,
  type SectionScrollMetric,
} from '../utils/homeScrollSpy'

const sections: SectionScrollMetric[] = [
  { id: 'projects', offsetTop: 0, offsetBottom: 980 },
  { id: 'experience', offsetTop: 1020, offsetBottom: 1740 },
  { id: 'education', offsetTop: 1780, offsetBottom: 2280 },
  { id: 'about', offsetTop: 2320, offsetBottom: 2700 },
  { id: 'contact', offsetTop: 2740, offsetBottom: 3440 },
]

describe('resolveActiveScrollSection', () => {
  it('selects projects at the top of the page', () => {
    expect(
      resolveActiveScrollSection(sections, {
        scrollY: 0,
        viewportTop: 80,
        viewportBottom: 720,
        atPageBottom: false,
      }),
    ).toBe('projects')
  })

  it('keeps education active while the anchor is inside it', () => {
    expect(
      resolveActiveScrollSection(sections, {
        scrollY: 1880,
        viewportTop: 1960,
        viewportBottom: 2600,
        atPageBottom: false,
      }),
    ).toBe('education')
  })

  it('highlights about when the scroll anchor sits inside it', () => {
    expect(
      resolveActiveScrollSection(sections, {
        scrollY: 2100,
        viewportTop: 2180,
        viewportBottom: 2812,
        atPageBottom: false,
      }),
    ).toBe('about')
  })

  it('does not skip about when scrolling between education and contact', () => {
    expect(
      resolveActiveScrollSection(sections, {
        scrollY: 2120,
        viewportTop: 2200,
        viewportBottom: 2832,
        atPageBottom: false,
      }),
    ).toBe('about')
  })

  it('forces contact when the user has scrolled to the page bottom', () => {
    expect(
      resolveActiveScrollSection(sections, {
        scrollY: 2960,
        viewportTop: 3040,
        viewportBottom: 3680,
        atPageBottom: true,
      }),
    ).toBe('contact')
  })
})

describe('getSectionVisibleHeight', () => {
  it('measures overlap between a section and the viewport band', () => {
    expect(getSectionVisibleHeight(sections[3], 2340, 2500)).toBe(160)
  })
})

describe('isNearPageTop', () => {
  it('detects when the user is at the document start', () => {
    expect(isNearPageTop(0)).toBe(true)
    expect(isNearPageTop(60)).toBe(false)
  })
})

describe('isAtPageBottom', () => {
  it('detects when scroll position reaches the document end', () => {
    expect(isAtPageBottom(968, 800, 1800, 48)).toBe(true)
    expect(isAtPageBottom(400, 800, 1800, 48)).toBe(false)
  })
})

describe('getSectionScrollMetric', () => {
  it('returns document offsets for a known section id', () => {
    const element = document.createElement('section')
    element.id = 'about'
    element.getBoundingClientRect = () =>
      ({
        top: 120,
        height: 180,
      }) as DOMRect

    Object.defineProperty(window, 'scrollY', { value: 2160, configurable: true })

    expect(getSectionScrollMetric(element)).toEqual({
      id: 'about',
      offsetTop: 2280,
      offsetBottom: 2460,
    })
  })
})
