import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectSpineGallery } from '../components/sections/ProjectSpineGallery'
import { projects } from '../data/projects'

describe('ProjectSpineGallery', () => {
  it('starts with all desktop spines collapsed', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const moneyTab = screen.getByRole('tab', { name: /Money Crunch/i })
    expect(moneyTab).toHaveAttribute('aria-selected', 'false')

    const moneyPanel = document.getElementById(moneyTab.getAttribute('aria-controls') ?? '')
    expect(moneyPanel).toHaveAttribute('hidden')
  })

  it('expands a desktop spine on hover and collapses on leave', async () => {
    render(<ProjectSpineGallery projects={projects} />)

    const gallery = screen.getByRole('group', { name: 'Project gallery' })
    const simTab = screen.getByRole('tab', { name: /Stochastic Motorsport Simulator/i })
    const simItem = simTab.closest('article')
    expect(simItem).toBeTruthy()

    fireEvent.mouseEnter(simItem!)
    expect(simTab).toHaveAttribute('aria-selected', 'true')

    const simPanel = document.getElementById(simTab.getAttribute('aria-controls') ?? '')
    expect(simPanel).not.toHaveAttribute('hidden')

    fireEvent.mouseLeave(gallery)
    await waitFor(() => {
      expect(simTab).toHaveAttribute('aria-selected', 'false')
      expect(simPanel).toHaveAttribute('hidden')
    })
  })

  it('links to the projects page from the view-all spine', () => {
    render(<ProjectSpineGallery projects={projects} />)

    expect(screen.getAllByRole('link', { name: 'View all projects' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'View all projects' })[0]).toHaveAttribute(
      'href',
      '/projects',
    )
  })

  it('toggles mobile folder panels on tap', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const moneyButton = screen.getByRole('button', { name: /Money Crunch/i })
    expect(moneyButton).toHaveAttribute('aria-expanded', 'false')

    const shopifyButton = screen.getByRole('button', { name: /Custom Shopify Storefront/i })
    expect(shopifyButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(shopifyButton)
    expect(shopifyButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(shopifyButton)
    expect(shopifyButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens a mobile-layout desktop expanded panel with a phone frame', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const moneyTab = screen.getByRole('tab', { name: /Money Crunch/i })
    const moneyItem = moneyTab.closest('article')
    expect(moneyItem).toBeTruthy()

    fireEvent.mouseEnter(moneyItem!)

    const expanded = moneyItem!.querySelector('.project-spine-gallery__expanded')
    expect(expanded).toBeTruthy()
    expect(expanded).toHaveClass('project-spine-gallery__expanded--mobile')
    expect(moneyItem!.querySelector('.project-spine-gallery__phone-frame')).toBeTruthy()
    expect(moneyItem!.querySelector('.project-spine-gallery__tech-dock')).toBeTruthy()
    expect(
      screen.getByRole('link', { name: /Money Crunch GitHub repository/i }),
    ).toHaveAttribute('href', 'https://github.com/MoneyCrunchDev/senior-budgetcrunch')
  })

  it('hides the active project spine while showing the wide expanded panel', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const simTab = screen.getByRole('tab', { name: /Stochastic Motorsport Simulator/i })
    const simItem = simTab.closest('article')
    expect(simItem).toBeTruthy()

    fireEvent.mouseEnter(simItem!)

    expect(simItem).toHaveClass('project-spine-gallery__desktop-item--active')
    expect(simItem!.querySelector('.project-spine-gallery__expanded')).toHaveClass(
      'project-spine-gallery__expanded--wide',
    )
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Stochastic Motorsport Simulator',
      }),
    ).toBeInTheDocument()
  })

  it('opens a populated mobile panel on tap', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const moneyButton = screen.getByRole('button', { name: /Money Crunch/i })
    const moneyItem = moneyButton.closest('article')
    expect(moneyItem).toBeTruthy()

    fireEvent.click(moneyButton)

    expect(moneyButton).toHaveAttribute('aria-expanded', 'true')
    expect(moneyItem!.querySelector('.project-spine-gallery__phone-frame')).toBeTruthy()
  })

  it('renders expanded preview media and stack content', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const simTab = screen.getByRole('tab', { name: /Stochastic Motorsport Simulator/i })
    const simItem = simTab.closest('article')
    expect(simItem).toBeTruthy()

    fireEvent.mouseEnter(simItem!)

    expect(simItem!.querySelector('.project-spine-gallery__expanded')).toBeTruthy()
    expect(simItem!.querySelector('.project-spine-gallery__media')).toBeTruthy()
    expect(
      screen.getByRole('list', { name: /Stochastic Motorsport Simulator technology stack/i }),
    ).toBeTruthy()
  })

  it('renders expanded videos for video-backed projects', () => {
    render(<ProjectSpineGallery projects={projects} />)

    const shopifyTab = screen.getByRole('tab', { name: /Custom Shopify Storefront/i })
    const shopifyItem = shopifyTab.closest('article')
    expect(shopifyItem).toBeTruthy()

    fireEvent.mouseEnter(shopifyItem!)

    expect(shopifyItem!.querySelector('video')).toHaveAttribute(
      'src',
      '/videos/projects/shopify_clip.mp4',
    )
  })
})
