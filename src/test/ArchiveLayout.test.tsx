import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ArchiveLayout } from '../components/layout/ArchiveLayout'

describe('ArchiveLayout sidebar controls', () => {
  it('shows only the hero seal on the home page at the top', () => {
    window.history.pushState({}, '', '/')

    const { container } = render(
      <ArchiveLayout pathname="/">
        <p>Page content</p>
      </ArchiveLayout>,
    )

    expect(container.querySelector('.home-hero__seal')).toBeInTheDocument()
    expect(container.querySelector('.sidebar-actions')).toBeInTheDocument()
    expect(container.querySelector('.sidebar-actions__row .sidebar-theme-toggle')).not.toBeInTheDocument()
  })

  it('shows contact, theme, and resume controls on inner pages', () => {
    window.history.pushState({}, '', '/projects')

    const { container } = render(
      <ArchiveLayout pathname="/projects">
        <p>Projects page</p>
      </ArchiveLayout>,
    )

    expect(container.querySelector('.sidebar-actions')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact me' })).toHaveAttribute('href', '/#contact')
    expect(container.querySelector('.sidebar-actions__row .sidebar-theme-toggle')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download resume PDF' })).toHaveClass('ledger-control--secondary')
    expect(container.querySelectorAll('.sidebar-actions .ledger-control')).toHaveLength(2)
  })
})
