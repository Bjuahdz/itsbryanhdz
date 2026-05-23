export type BlogPost = {
  id: string
  title: string
  date: string
  excerpt: string
  readMinutes: number
  topic: string
  notes: {
    premise: string
    process: string
    takeaway: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: 'plaid-action-api',
    title: 'Why an action-based Plaid API kept our mobile flow simple',
    date: '2026-03-12',
    excerpt:
      'One Appwrite function, explicit actions, and fewer moving parts made link tokens, exchange, and sync easier to reason about in production.',
    readMinutes: 5,
    topic: 'Project notes',
    notes: {
      premise:
        'Money Crunch needed bank-linking work that felt predictable from the mobile app instead of spreading Plaid logic across screens.',
      process:
        'I kept the API action-based so token creation, exchange, and sync each had a clear request shape, response path, and failure point.',
      takeaway:
        'The simpler boundary made the flow easier to debug and easier for teammates to understand during handoff.',
    },
  },
  {
    id: 'onboarding-routing',
    title: 'Session-aware routing for multi-step onboarding',
    date: '2026-02-04',
    excerpt:
      'How we kept auth, onboarding, and main tabs predictable without fighting the router on every cold start.',
    readMinutes: 4,
    topic: 'Learning systems',
    notes: {
      premise:
        'The app needed to know whether a user belonged in auth, onboarding, or the main tab experience without flashing the wrong screen.',
      process:
        'I treated session state and onboarding completion as routing inputs, then made the transition rules explicit before polishing screens.',
      takeaway:
        'Good navigation is systems work: the interface feels calm when the state model underneath it is honest.',
    },
  },
  {
    id: 'field-notes-q1',
    title: 'Field notes from building in public',
    date: '2026-01-18',
    excerpt:
      'Small lessons on scope, feedback loops, and shipping something usable before polishing the edges.',
    readMinutes: 3,
    topic: 'Field notes',
    notes: {
      premise:
        'Building in public creates pressure to polish early, but the better signal usually comes from a smaller working version.',
      process:
        'I focused on the shortest loop: define the user action, make it work, then use feedback to decide what deserved refinement.',
      takeaway:
        'The useful version teaches faster than the perfect draft, especially when the project is still finding its shape.',
    },
  },
]
