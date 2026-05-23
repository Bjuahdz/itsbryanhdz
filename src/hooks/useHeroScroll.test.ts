import { describe, expect, it } from 'vitest'
import {
  BEFORE_HERO_AT_VIEWPORT_RATIO,
  PAST_HERO_AT_VIEWPORT_RATIO,
} from './useHeroScroll'

describe('useHeroScroll thresholds', () => {
  it('uses hysteresis - before-hero ratio is below the past-hero ratio', () => {
    expect(BEFORE_HERO_AT_VIEWPORT_RATIO).toBeLessThan(PAST_HERO_AT_VIEWPORT_RATIO)
  })

  it('past-hero threshold is past the hero midline', () => {
    expect(PAST_HERO_AT_VIEWPORT_RATIO).toBeGreaterThan(0.5)
    expect(PAST_HERO_AT_VIEWPORT_RATIO).toBeLessThanOrEqual(0.75)
  })
})
