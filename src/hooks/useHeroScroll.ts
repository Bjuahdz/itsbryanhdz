import { useEffect, useState } from 'react'

/**
 * Tracks whether the user has scrolled past the home hero (for theme seal placement).
 * Uses hysteresis so toggling near the threshold does not flicker.
 */
export const PAST_HERO_AT_VIEWPORT_RATIO = 0.6
export const BEFORE_HERO_AT_VIEWPORT_RATIO = 0.4

type UseHeroScrollOptions = {
  pathname: string
}

export function useHeroScroll({ pathname }: UseHeroScrollOptions) {
  const isHomePage = pathname === '/'
  const [isPastHero, setIsPastHero] = useState(!isHomePage)

  useEffect(() => {
    let frameId: number | null = null

    const updatePastHero = (nextValue: boolean) => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(() => {
        setIsPastHero(nextValue)
        frameId = null
      })
    }

    if (!isHomePage) {
      updatePastHero(true)

      return () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId)
        }
      }
    }

    let pastHero = false

    const update = () => {
      const y = window.scrollY
      const viewport = window.innerHeight
      const pastAt = viewport * PAST_HERO_AT_VIEWPORT_RATIO
      const beforeAt = viewport * BEFORE_HERO_AT_VIEWPORT_RATIO

      if (!pastHero && y > pastAt) {
        pastHero = true
        updatePastHero(true)
      } else if (pastHero && y < beforeAt) {
        pastHero = false
        updatePastHero(false)
      }
    }

    frameId = window.requestAnimationFrame(() => {
      setIsPastHero(false)
      frameId = null
      update()
    })
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [isHomePage])

  return {
    isPastHero: isHomePage ? isPastHero : true,
    isHomePage,
  }
}
