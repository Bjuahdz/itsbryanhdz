import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'
import { site, socials } from '../data/site'

describe('site data', () => {
  it('has required site fields', () => {
    expect(site.name).toBeTruthy()
    expect(site.email).toContain('@')
    expect(site.skillGroups.length).toBeGreaterThan(0)
  })

  it('has projects and social links', () => {
    expect(projects.length).toBeGreaterThanOrEqual(1)
    projects.forEach((project) => {
      expect(project.keywords.length).toBeGreaterThan(0)
      expect(project.overview).toBeTruthy()
      expect(project.outcomes.length).toBeGreaterThan(0)
    })
    socials.forEach((item) => {
      expect(item.href).toMatch(/^https?:\/\//)
      expect(item.label).toBeTruthy()
    })
  })
})
