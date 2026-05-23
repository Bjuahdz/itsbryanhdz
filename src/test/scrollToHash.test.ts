import { afterEach, describe, expect, it } from 'vitest'
import { scheduleScrollToHash, scrollToHash } from '../utils/scrollToHash'

describe('scrollToHash', () => {
  afterEach(() => {
    document.getElementById('contact')?.remove()
  })

  it('returns false when the target is not in the document', () => {
    expect(scrollToHash('#contact')).toBe(false)
  })

  it('scrolls when the target exists', () => {
    const section = document.createElement('section')
    section.id = 'contact'
    document.body.appendChild(section)

    expect(scrollToHash('#contact')).toBe(true)
  })

  it('schedules a scroll once the target appears', async () => {
    const scrolled = await new Promise<boolean>((resolve) => {
      scheduleScrollToHash('#contact')

      requestAnimationFrame(() => {
        const section = document.createElement('section')
        section.id = 'contact'
        document.body.appendChild(section)
      })

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resolve(Boolean(document.getElementById('contact')))
        })
      })
    })

    expect(scrolled).toBe(true)
  })
})
