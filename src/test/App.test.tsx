import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the home sections and sidebar navigation', () => {
    window.history.pushState({}, '', '/')
    render(<App />)

    expect(
      screen.getByRole('navigation', { name: 'Section navigation' }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Open menu' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go to about me' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go to education' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go to projects' })).toHaveAttribute('href', '/#projects')
    expect(screen.getByRole('link', { name: 'Go to experience timeline' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Go to blog' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go to contact' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'View all projects' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.queryByRole('link', { name: 'View all blog posts' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Journal' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument()
    expect(screen.queryByLabelText('Search projects by keyword')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Scroll to projects' })).toHaveAttribute(
      'href',
      '/#projects',
    )
    expect(document.getElementById('home-hero')).toBeInTheDocument()
    expect(document.querySelector('.home-hero .skill-strip-static')).toBeInTheDocument()
    expect(document.querySelector('.home-hero__seal')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: "Let's connect" })).not.toBeInTheDocument()
    expect(screen.getByRole('img', { name: /graduation portrait/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'University of West Georgia' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Kennesaw State University' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Certificates' })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Stochastic Motorsport Simulator/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Why an action-based Plaid API kept our mobile flow simple' })).not.toBeInTheDocument()
    expect(document.getElementById('projects')).toBeInTheDocument()
    expect(document.querySelector('#projects .skill-strip-static')).not.toBeInTheDocument()
    expect(document.getElementById('blog')).not.toBeInTheDocument()
    expect(document.getElementById('experience')).toBeInTheDocument()
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('scrolls to a home section after navigating from a full page', async () => {
    window.history.pushState({}, '', '/projects')
    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: 'Go to contact' }))

    await waitFor(() => {
      expect(window.location.pathname).toBe('/')
      expect(window.location.hash).toBe('#contact')
      expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument()
    })
  })

  it('renders projects as a separate page', () => {
    window.history.pushState({}, '', '/projects')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Technical dossier' })).toBeInTheDocument()
    expect(document.getElementById('projects')).toBeInTheDocument()
  })

  it('renders blog as a separate page', () => {
    window.history.pushState({}, '', '/blog')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Notes and point of view' })).toBeInTheDocument()
    expect(document.getElementById('blog')).toBeInTheDocument()
  })

})
