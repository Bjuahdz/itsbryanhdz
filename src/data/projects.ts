import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'money-crunch',
    title: 'Money Crunch',
    description:
      'A mobile budgeting app focused on intentional spending, habit awareness, and financial goals. Guides users through onboarding, bank linking, and transaction sync so they can see where money goes and why.',
    tech: [
      'Expo',
      'React Native',
      'TypeScript',
      'Appwrite',
      'Plaid',
      'Mapbox',
      'Figma',
    ],
    year: '2026',
    category: 'Mobile product',
    status: 'Project lead',
    overview:
      'Team-built Expo Router mobile app where I served as project lead, coordinated group meetings and direction, created initial Figma wireframes/mockups, supported documentation, and contributed to development.',
    keywords: [
      'mobile',
      'budgeting',
      'plaid',
      'appwrite',
      'onboarding',
      'fintech',
      'figma',
      'project lead',
    ],
    outcomes: [
      'Served as project lead by coordinating group meetings, project direction, documentation support, and development contributions.',
      'Created initial Figma wireframes and mockups to align the team on app structure and user flows.',
      'Built session-aware routing across auth, multi-step onboarding, and main tabs.',
      'Integrated Plaid Link with a single Appwrite function using an action-based API.',
      'Synced and surfaced transactions in timeline and activity views for spending awareness.',
    ],
    websiteUrl: 'https://senior-budgetcrunch.vercel.app/',
    repoUrl: 'https://github.com/MoneyCrunchDev/senior-budgetcrunch',
    imageUrl: '/images/projects/money-crunch-app.png',
    expandedLayout: 'mobile',
  },
  {
    id: 'cs4632-racing-sim',
    title: 'Stochastic Motorsport Simulator',
    description:
      'Custom-built Python simulator for CS 4632 Modeling and Simulation that models race performance with physics-inspired lap dynamics, stochastic variability, and Monte Carlo trials—showing how vehicle setup, weather, tire strategy, and driver behavior interact to shape lap times and outcomes.',
    tech: ['Python', 'Matplotlib'],
    year: '2026',
    category: 'Modeling & simulation',
    status: 'Course project',
    overview:
      'From-scratch motorsport simulator (no prebuilt engines) built through iterative milestone releases with JSON configs, N-entrant trials, CSV/JSON exports, twelve preset scenarios, and an m4_analysis.py workflow for sensitivity sweeps, 95% confidence intervals, and matplotlib figures.',
    keywords: [
      'python',
      'simulation',
      'monte carlo',
      'motorsport',
      'modeling',
      'matplotlib',
      'agile',
      'iterative development',
    ],
    outcomes: [
      'Used an Agile-style iterative approach, incorporating feedback with each module and milestone release.',
      'Implemented aero, friction-limited cornering, traction-limited acceleration, grip-aware braking, and visibility penalties with smoothstep tire grip blending.',
      'Shipped JSON-driven runs for any field size, twelve documented presets, and a DataCollector pipeline (timeseries, events, summary, run index).',
      'Validated inputs with one-factor-at-a-time sweeps across wetness, visibility, laps, trials, and track complexity, plus reproducible figure generation.',
    ],
    repoUrl: 'https://github.com/bryanhdzksu/CS4632_RACING_SIM',
    imageUrl: '/images/projects/cs4632-racing-sim-cover.png',
    expandedLayout: 'wide',
  },
  {
    id: 'shopify-ecommerce',
    title: 'Custom Shopify Storefront',
    description:
      'Custom-built Shopify e-commerce shop with fully customizable components, scalable features, and an interactive, intuitive shopping experience.',
    tech: ['Shopify', 'React', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    category: 'E-commerce',
    status: 'Client build',
    overview:
      'Headless-style Shopify storefront with modular sections, reusable UI primitives, and performance-minded patterns built for merchandising flexibility.',
    keywords: ['shopify', 'e-commerce', 'storefront', 'react', 'tailwind', 'custom theme'],
    outcomes: [
      'Built customizable product and collection components that merchandisers can recompose without redeploying code.',
      'Designed scalable section architecture for campaigns, featured collections, and promotional storytelling.',
      'Delivered an intuitive browse-to-checkout flow with responsive layouts and polished interaction states.',
    ],
    videoUrl: '/videos/projects/shopify_clip.mp4',
    expandedLayout: 'wide',
    footerIconTone: 'on-light',
  },
]
